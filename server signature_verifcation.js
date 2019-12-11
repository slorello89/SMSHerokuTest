const app = require('express')()
const bodyParser = require('body-parser')
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.listen(process.env.PORT || 5000);

app.post('/webhooks/inbound-message', (req, res) => {
    console.log(req.body);
    const params = Object.assign(req.query, req.body)
    const NEXMO_API_SIGNATURE_SECRET = process.env.NEXMO_API_SIGNATURE_SECRET
    if (Nexmo.generateSignature("md5hash", NEXMO_API_SIGNATURE_SECRET, params) === params.sig) {
      console.log("Valid signature");
    } else {
      console.log("Invalid signature");
    }
    res.status(200).end();
  });

  app.post('/webhooks/dlr', (req, res) =>{
    console.log(req.body)
    res.status(200).end();
  });