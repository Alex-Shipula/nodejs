const express = require('express')
const router = express.Router()
const https = require('https');

let convert;
https.get('https://api.exchangeratesapi.io/latest?base=EUR', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
  //console.log (chunk);
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    //console.log(JSON.parse(data));
    // console.log(data);

    convert = JSON.parse(data);

  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
//Get original transactions
var fs = require('fs')
var request = require('request');
console.log(convert);
setTimeout(() => {
  console.log(convert);

}, 1000);
module.exports = router;
