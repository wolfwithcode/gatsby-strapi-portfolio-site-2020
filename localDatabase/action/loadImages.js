var axios = require("axios")
const writeJsonFile = require("write-json-file")
const HOST = "http://localhost:1337"
var Jimp = require('jimp');
const siteMetadata = require('../json/siteMetadata.json')

const loadImages = () => {
  const {metadata: {heroImg}} = siteMetadata
  Jimp.read(heroImg)
  .then(lenna => {
    return lenna
      .write('src/assets/hero-img.png'); // save
  })
  .catch(err => {
    console.error(err);
  });
}

// console.log("siteMetadata ", siteMetadata)
loadImages();