const express = require('express');
const app = express();

app.use(express.static('static_files'));

let secret = require('./secret.js');

const authorDatabase = {
  'Chris': {stance: 'left', photo: 'Images/chris.jpg'},
  'Alan': {stance: 'mid',   photo: 'Images/alan.jpg'},
  'Shreya': {stance: 'right',  photo: 'Images/shreya.jpeg'},
  'Dave': {stance: 'right',  photo: 'Images/dave.jpeg'},
  'Garfield': {stance: 'left',  photo: 'Images/garfield.jpeg'}
};

app.get('/authors/:authorid', (req, res) => {
  const nameToLookup = req.params.authorid; // matches ':userid' above
  const val = authorDatabase[nameToLookup];
  console.log(nameToLookup, '->', val); // for debugging
  if (val) {
    res.send(val);
  } else {
    res.send({}); // failed, so return an empty object instead of undefined
  }
});

app.get('/apiKeys', (req, res) => {
  // db.all() fetches all results from an SQL query into the 'rows' variable:
  info = {'firebase': secret.firebaseConfig, 'newsapi': secret.shreyaNewsApiKey};
  console.log(info);
  res.send(info);
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});