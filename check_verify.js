const Nexmo = require("nexmo")
require('dotenv').config();

const nexmo = new Nexmo({
    apiKey: process.env.NEXMO_API_KEY,
    apiSecret: process.env.NEXMO_API_SECRET
  })

nexmo.verify.check({
    request_id: process.env.REQUEST_ID,
    code: process.env.CODE
  }, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });