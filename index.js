var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (req, res) {
  const ipAddress = req.ip || req.connection.remoteAddress;
  const language = req.headers['accept-language'] || 'Unknown';
  const software = req.headers['user-agent'] || 'Unknown';

  res.json({
    ipaddress: ipAddress,
    language: language,
    software: software
  });
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});