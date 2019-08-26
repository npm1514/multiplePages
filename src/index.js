import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";

import AboutRoot from "./roots/AboutRoot";
import CareersRoot from "./roots/CareersRoot";
import CaresRoot from "./roots/CaresRoot";
import ContactRoot from "./roots/ContactRoot";
import NewsroomRoot from "./roots/NewsroomRoot";
import PressReleasesRoot from "./roots/PressReleasesRoot";

import { ServerStyleSheet } from 'styled-components';
import fs from 'fs';
import compression from 'compression';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import axios from 'axios';

var PORT = process.env.PORT || 3003;

const app = express();
app.use(compression());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

var bundle = "",
    dataObj = {},
    newsroomBundle = "",
    aboutBundle = "",
    caresBundle = "",
    pressReleasesBundle = "",
    careersBundle = "",
    contactBundle = "",
    pressReleaseLast = 0,
    pressReleaseData = [];

fs.readFile('./dist/js/newsroom.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  newsroomBundle = data || "";
})
fs.readFile('./dist/js/about.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  aboutBundle = data || "";
})
fs.readFile('./dist/js/cares.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  caresBundle = data || "";
})
fs.readFile('./dist/js/pressReleases.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  pressReleasesBundle = data || "";
})
fs.readFile('./dist/js/careers.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  careersBundle = data || "";
})
fs.readFile('./dist/js/contact.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  contactBundle = data || "";
})

app.get('/newsroom', (req, res) => {
    dataObj = {};
    bundle = newsroomBundle;
    var test = (req.hostname.indexOf("localhost") != -1 || req.hostname.indexOf("integration") != -1) ? "-integration.test" : "";
    var newsroomUrl = req.query.pb ? `https://pagebuilderdataprocessor${test}.overstock.com/documents/${req.query.pb}` : `https://api.overstock.com/cms/live/NEWSROOM_PAGE`;
    var cookie = req.cookies ? req.cookies['ostk-security'] : "";
    if(!cookie){
      newsroomUrl = `https://api.overstock.com/cms/live/NEWSROOM_PAGE`;
    }
    Promise.all([
      fetcher(`https://clientapi.gcs-web.com/data/5aac0efa-7e23-406d-ac80-79d5323b11a9/news`)
        .then((data) => {
          dataObj.pressReleaseData = data.data;
        }).catch(errHandle),
      fetcher(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=OSTK&interval=15min&apikey=R2HW2L1P17QYYEX5`)
        .then((data) => {
          dataObj.tickerData = data;
        }).catch(errHandle),
      fetch(newsroomUrl, {
        headers: {
          "Authorization": cookie
        }
      })
        .then(req => req.json())
        .then((data) => {
          dataObj.newsroom = data.document.newsroom;
        }).catch(errHandle),
      fetcher(`https://api.overstock.com/cms/live/NEWSROOM_ARTICLES`)
        .then((data) => {
          dataObj.mediaCoverage = data.document;
        }).catch(errHandle)
    ])
    .then(() => {
      // res.set('Cache-Control', 'public, max-age=31557600');
      res.send(returnHTML(dataObj, NewsroomRoot, "Overstock Newsroom | Dream Homes for All", "Overstock Newsroom | Dream Homes for All"));
    }).catch(errHandle);
});

app.get('/about', (req, res) => {
      dataObj = {};
      bundle = aboutBundle;
      fetcher(`https://api.overstock.com/cms/live/NEWSROOM_PAGE`)
        .then((data) => {
          dataObj.about = data.document.newsroom;
          res.set('Cache-Control', 'public, max-age=31557600');
          res.send(returnHTML(dataObj, AboutRoot, "About Us | Overstock.com", "About Overstock - Dream Homes for All"));
        }).catch(errHandle);
});

app.post('/overstock-cares/emailer', (req, res) => {
    axios.post('http://k8s2687.overstock.com/mailer', {
        "from": req.body.smail,
        "to": "overstockcares@overstock.com",
        "subject": "Overstock Cares Donation Request",
        "content": {
            "body": `
              <h1>Overstock Cares Donation Request</h1>
              <div>${req.body.content}</div>
              <div style='color:#5e5e5e;margin-top:50px;'>
                <p>Yours Truly,</p>
                <p>${req.body.firstName}</p>
              </div>
        `}
    }).then(function (response) {
      res.send("email sent")
    }).catch(function (error) {
      console.log(error);
    });
});

app.get('/overstock-cares', (req, res) => {
      dataObj = {};
      bundle = caresBundle;
      Promise.all([
        fetcher(`https://api.overstock.com/cms/live/CARES_ARTICLES`)
          .then((data) => {
            dataObj.caresArticles = data.document ;
          }).catch(errHandle),
          fetcher(`https://api.overstock.com/cms/live/CARES_PAGE`)
            .then((data) => {
              dataObj.cares = data.document;
            }).catch(errHandle)
      ])
      .then(() => {
        res.set('Cache-Control', 'public, max-age=31557600');
        res.send(returnHTML(dataObj, CaresRoot, "Overstock Cares | Dream Homes for All", "Overstock Cares | Dream Homes for All", true));
      }).catch(errHandle);
});

app.get('/contact-us', (req, res) => {
      bundle = contactBundle;
      res.set('Cache-Control', 'public, max-age=31557600');
      res.send(returnHTML(dataObj, ContactRoot, "Contact Us | Overstock.com", "Overstock Contact Us | Dream Homes for All"));
});

app.get('/careers', (req, res) => {
      bundle = careersBundle;
      res.set('Cache-Control', 'public, max-age=31557600');
      res.send(returnHTML(dataObj, CareersRoot, "Careers | Overstock.com", "Careers at Overstock | Dream Homes for All"));
});

app.get('/press-releases', (req, res) => {
      dataObj = {};
      bundle = pressReleasesBundle;
      Promise.all([
        fetcher(`https://clientapi.gcs-web.com/data/5aac0efa-7e23-406d-ac80-79d5323b11a9/news`)
          .then((data) => {
            pressReleaseLast = data.links.last.slice(data.links.last.length - 1);
            dataObj.pressReleaseData = data.data;
          }).catch(errHandle),
        fetcher(`https://api.overstock.com/cms/live/NEWSROOM_PAGE`)
          .then((data) => {
            dataObj.pressReleases = data.document.newsroom.pressReleases;
          }).catch(errHandle)
        ])
        .then(() => {
          res.set('Cache-Control', 'public, max-age=31557600');
          res.send(returnHTML(dataObj, PressReleasesRoot, "Press Releases | Overstock.com", "Overstock Press Releases | Dream Homes for All"));
        }).catch(errHandle);
});

app.get('/get-press-releases', (req, res) => {
  pressReleaseData = [];
  let counter = 0
  for(var i = 1; i <= pressReleaseLast; i++){
    fetcher(`https://clientapi.gcs-web.com/data/5aac0efa-7e23-406d-ac80-79d5323b11a9/news?page=${i}`)
      .then((data) => {
        counter++
        pressReleaseData.push(...data.data);
      }).then(() => {
        if(counter == pressReleaseLast){
          res.send(pressReleaseData);
        }
      }).catch(errHandle)
  }
});

app.get('/health', (req, res) => res.send('OK'));

app.listen( PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
});


// functions!!!!!!!!!!!!!


function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach((x) => {
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, Page, title, description, caresUpload){
    const dataString = JSON.stringify(data);
    const cares = caresUpload ? `<script charset="utf-8" src="https://ucarecdn.com/libs/widget/3.6.0/uploadcare.full.min.js" ></script>` : "";
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();
    return `
        <html lang="en">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>${title}</title>
            <meta name="Description" content="${description}">
            ${cares}
            <style>
              body { margin: 0; font-family: Helvetica; }
              body.modal-open { overflow: hidden; }
              a { text-decoration: none; color: #4d4d4d;}
            </style>
            ${styles}
          </head>
          <body>
            <script>window.os = window.os || {};</script>
            <script>window.__LPO__=${dataString}</script>
            <div id="lpo_app" role="main">${body}</div>
            <script>${bundle}</script>
          </body>
        </html>
      `;
}

function errHandle(err){
    console.log(err);
}
