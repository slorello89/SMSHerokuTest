const app = require('express')()
const bodyParser = require('body-parser')
const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECRET
});
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.listen(process.env.PORT || 5000);

app.post('/webhooks/inbound-message', (req, res) => {
    console.log(req.body);

    var text = req.body['text'];

    name = text.split('Hello my name is ')[1]

    to = req.body['msisdn']
    from = req.body['to']

    responseText = "Hello " + name + " this is Nexmo!"

    nexmo.message.sendSms(from, to, responseText, {
      type: "unicode"
    }, (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        if (responseData.messages[0]['status'] === "0") {
          console.log("Message sent successfully.");
        } else {
          console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
      }
    })

   
    res.status(200).end();
  });

  app.post('/webhooks/dlr', (req, res) =>{
    console.log(req.body)
    res.status(200).end();
  })