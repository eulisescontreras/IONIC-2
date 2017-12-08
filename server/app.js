var consts = require('../server/ServerConst');
var express = require('express');
var app = express();

app.use(function (req, res, next) {
    
    // Website you wish to allow to connect
    res.setHeader(WEBSITE_ALLOW_CONNECT_NAME, WEBSITE_ALLOW_CONNECT_VALUE);

    // Request methods you wish to allow
    res.setHeader(REQUEST_ALLOW_METHODS_NAME, REQUEST_ALLOW_METHODS_VALUE);

    // Request headers you wish to allow
    res.setHeader(REQUEST_ALLOW_HEADERS_NAME, REQUEST_ALLOW_HEADERS_VALUE);

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader(REQUEST_ALLOW_COOKIES_NAME, true);

    // Pass to next layer of middleware
    next();
});

app.get(URL_SERVER_LOGIN, function (req, res) {
  res.json('Hello World!');
});

app.listen(3000, function () {
  console.log('Server run on port 3000!');
});