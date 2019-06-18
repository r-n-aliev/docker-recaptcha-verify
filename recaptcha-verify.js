const settings = {port:process.env.PORT}
const express = require('express');
const app = express();
const request = require('request-promise');
app.use(express.json());

app.listen(settings.port, () => {
  console.log('Server started! Port: %s', settings.port);
});

app.post('/recaptcha-verify', (req,res) => {
  console.log('/recaptcha-verify request >>> Body:');
  console.log(req.body);

  const userToken = req.body['user-token'];
  if (!userToken) {
    const errMsg = 'Error: user token is empty.';
    console.error(errMsg);
    res.status(400); // bad request
    res.send(errMsg);
    return;
  }

  var opts = {
   method: 'POST',
   uri: process.env.CAPTCHA_SITEVERIFY_URI,
   form: {
    secret: process.env.SECRET_KEY,
    response: userToken
   },
   json: true
  };

request(opts)
  .then((response) => {
    console.log('Verification response:');
    console.log(response);
    const verifResult = {success: response['success'], errors: response['error-codes']};
    res.send(verifResult);
   })
  .catch((err) => {
   console.error(err);
   const verifResult = {success: false, errors: ['Error from ' + process.env.CAPTCHA_SITEVERIFY_URI]};
   res.status(404); // server error
   res.send(verifResult);
   })
});
