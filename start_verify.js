const Nexmo = require("nexmo")
require('dotenv').config();
console.log("API KEY: " + process.env.NEXMO_API_KEY);

const nexmo = new Nexmo({
    apiKey: process.env.NEXMO_API_KEY,
    apiSecret: process.env.NEXMO_API_SECRET
  })

nexmo.verify.request({
    number: process.env.TO_NUMBER,
    brand: process.env.NEXMO_BRAND
}, (err,result)=>{
    
    if (err) {
        console.error(err);
      } else {
        const verifyRequestId = result.request_id;
        console.log('request_id', verifyRequestId);
      }
})