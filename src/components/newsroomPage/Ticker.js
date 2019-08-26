/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Chart from 'chart.js';
import { SectionContainer } from '../../styled-components/global';
import { ChartHeading, ChartPrice, ChartInfo } from '../../styled-components/newsroom';

class Ticker extends Component {
    constructor(props) {
        super(props);

        const ticker = this.props.data['Monthly Time Series'];

        const keys = Object.keys(ticker);
        const currentPrice = parseFloat(ticker[keys[0]]['4. close']).toFixed(2);
        let labels = [];
        let data = [];
        for (let i = 0; i < 4; i += 1) {
            const closePrice = ticker[keys[i]]['4. close'];
            let date = new Date(keys[i]);
            date = date.toLocaleString('en-us', { month: 'short' });
            labels.push(date);
            data.push(parseInt(closePrice, 10).toFixed(2));
        }
        labels = labels.reverse();
        data = data.reverse();

        this.state = {
            currentPrice,
            labels,
            data
        };
    }

    componentDidMount() {
        this.renderTicker();
    }

    renderTicker() {
        const ctx = document.getElementById('irTicker3');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.state.labels,
                datasets: [{
                    data: this.state.data,
                    backgroundColor: '#F9FAFB',
                    borderColor: '#DBDCDD',
                    borderWidth: 1,
                    fill: false
                }]
            },
            options: {
                elements: {
                    line: { tension: 0 }
                },
                scales: {
                    xAxes: [{
                        gridLines: { display: false }
                    }],
                    yAxes: [{
                        gridLines: { display: false },
                        position: 'right',
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: tooltipItem => tooltipItem.yLabel
                    }
                }
            }
        });
    }

    render() {
        return (
            <SectionContainer>
                <ChartHeading className="chart-heading">NASDAQ | OSTK (common stock)</ChartHeading>
                <ChartPrice className="chart-price">
                  <strong>${this.state.currentPrice}</strong>
                </ChartPrice>
                <canvas id="irTicker3"/>
                <ChartInfo className="chart-info">Data provided by Nasdaq. Minimum 15 minutes delayed.</ChartInfo>
            </SectionContainer>
        );
    }
}

export default Ticker
