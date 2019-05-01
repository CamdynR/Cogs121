const express = require('express');
const app = express();

app.use(express.static('static_files'));

const authorDatabase = {
  'Chris': {stance: 'left', photo: 'Images/chris.jpg'},
  'Alan': {stance: 'mid',   photo: 'Images/alan.jpg'},
  'Shreya': {stance: 'right',  photo: 'Images/shreya.jpeg'}
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

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});