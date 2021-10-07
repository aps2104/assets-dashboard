const express = require('express');
const { DateTime } = require('luxon');

const app = express();
const port = 3001;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }


function makeReading(assetName) {
    return  {
        asset: assetName,
        reading: getRandomInt(3, 10),
        timeStamp: DateTime.now().minus(getRandomInt(200, 20000)).toISO()
        }
}

function returnAssets() {
    let res = []
    for (var i = 0; i < 100; i++) {
        res.push(makeReading("asset_1"));
        res.push(makeReading("asset_2"));
        res.push(makeReading("asset_3"));
    }
    return res
}

app.get('/', (request, response) => response.send('Hello World!'));

app.get('/assets', (request, response) => response.send(returnAssets()))

app.listen(port, () =>
  console.log(`Mock Portal API listening on port ${port}!`)
);