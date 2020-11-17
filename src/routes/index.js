const express = require("express");
const path = require("path");
const fs = require('fs');
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {title:"Seleccionar AR", library:"none", inc:"none"});
});

router.get("/aframe-arjs-nft-marker", (req, res) => {
  res.render("aframe-arjs-nft-marker", {title:"ARJS", library:"aframe",  inc:"nft"});
});

router.get("/aframe-arjs-location", (req, res) => {
  const jsonElement = JSON.parse(fs.readFileSync(path.join(__dirname,'geolocation.json'), 'utf8'));
  res.render("aframe-arjs-location",jsonElement );
});

router.get("/model-viewer", (req, res) => {
  const jsonElement = JSON.parse(fs.readFileSync(path.join(__dirname,'modelviewer.json'), 'utf8'));
  res.render("model-viewer", jsonElement);
});

module.exports = router;
