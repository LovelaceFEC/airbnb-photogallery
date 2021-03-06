const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');
const db = require('../Database/searchdb.js');



app.use(express.static(__dirname +'/../client/dist'))

app.get('/api/photo-gallery/data', function (req,res) {
  //get the correct folder name and the number of photos from the mysql database
  //invoke the fetchphotos function

  db.searchdb((err,listing) => {
    if(err) {
      res.status(400)
      res.end();
    }
    res.send(listing);
  })
})


var server = app.listen(port, function () {

  console.log(`Server is listening on port: ${port}`);
});



module.exports.server = server;