var path = require("path");
var express = require("express");
const https = require("https");
const fs = require("fs");
const bodyParser = require("body-parser");

var DIST_DIR = path.join(__dirname, "");
var PORT = 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get("*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "taskpane.html"));
});

app.listen(PORT);
/*const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
  };
    
  
  https.createServer(options, app)
  .listen(3000, function (req, res) {
    console.log("Server started at port 3000");
  });*/