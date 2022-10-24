const express = require("express");
const solc = require("solc");
const cors = require("cors");
var bodyParser = require("body-parser");

const app = express();

var jsonParser = bodyParser.json();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

//CREATE
app.post("/", jsonParser, async (req, res) => {
  try {
    if (req.body.data) {
      const response = solc.compile(req.body.data, 1);
      return res.status(200).json(response);
    } else {
      return res.status(400);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.listen(process.env.PORT || 8080);
