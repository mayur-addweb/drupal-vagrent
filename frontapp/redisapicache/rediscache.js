"use strict";
// API Example with Redis as a Cache

const express = require("express");
const app = express();
const { URL } = require("url");
const redis = require("redis");
const fetch = require("node-fetch");
const TTL = 300;

let connectionString = process.env.COMPOSE_REDIS_URL;

if (connectionString === undefined) {
  console.error("Please set the COMPOSE_REDIS_URL environment variable");
  process.exit(1);
}

let client = null;

if (connectionString.startsWith("rediss://")) {
  client = redis.createClient(connectionString, {
    tls: { servername: new URL(connectionString).hostname }
  });
} else {
  client = redis.createClient(connectionString);
}


app.use(function(req, res, next) {
  var keyWord = '';
  keyWord = req.originalUrl;
  keyWord = keyWord.substring(1);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  app.get("/" + keyWord, (req, resp) => {
    client.get(keyWord+  "/", (err, result) => {
      if (result != null) {
        console.log("Cache hit for ");
        resp.send(result);
      } else {
        console.log("Cache missed for ");
        fetch(
            "https://sdcom.addwebprojects.com/" + keyWord +  "/rest?_format=json"
        )
          .then(res => res.json())
          .then(json => {
            client.setex(keyWord + "/" , TTL, JSON.stringify(json));
            resp.send(json);
          })
          .catch(err => {
            console.error(err);
            resp.send(202);
          });
      }
    });
    return;
  });  
  next();
});
app.listen(3300);
