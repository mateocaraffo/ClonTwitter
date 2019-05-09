const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});
router.get('/users/:name', function(req, res) {
  //console.log({id:id})
  var name = req.params.name;
  var tweets = tweetBank.find( { name: name } );
  console.log(tweets,'==================')
  res.render( 'index', { tweets } ); 
});
router.get("/tweets/:id", function (req, res) {
  var id=req.params.id
  var tweets = tweetBank.find( { id: id } );
  res.render ("index", {tweets:tweets})
})
module.exports = router;