const Nexmo = require("nexmo")
require('dotenv').config();
console.log("API KEY: " + process.env.NEXMO_API_KEY);

const nexmo = new Nexmo({
    apiKey: process.env.NEXMO_API_KEY,
    apiSecret: process.env.NEXMO_API_SECRET
  })

  nexmo.verify.control({
    request_id: process.env.REQUEST_ID,
    cmd: 'trigger_next_event'
  }, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });