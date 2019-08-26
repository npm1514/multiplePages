export const xmlConverter = (xml) => {
    let obj = {};

    if (xml.nodeType === 1) {
        if (xml.attributes.length > 0) {
            obj['@attributes'] = {};

            for (let j = 0; j < xml.attributes.length; j += 1) {
                const attribute = xml.attributes.item(j);
                obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType === 3) { // text
        obj = xml.nodeValue;
    }

    if (xml.hasChildNodes()) {
        for (let i = 0; i < xml.childNodes.length; i += 1) {
            const item = xml.childNodes.item(i);
            const nodeName = item.nodeName;

            if (typeof (obj[nodeName]) === 'undefined') {
                obj[nodeName] = xmlConverter(item);
            } else {
                if (typeof (obj[nodeName].push) === 'undefined') {
                    const old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }

                obj[nodeName].push(xmlConverter(item));
            }
        }
    }

    return obj;
};
