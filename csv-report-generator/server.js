const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs')

app.set('view engine', 'ejs');

app.use(express.static('client'));


app.use(bodyParser.urlencoded({extended: true}));



app.post('/', (req, res) => {
  console.log(req.body.data, 'REQ BODY')
  var body = req.body.data;
  var obj = JSON.parse(body);
  var props = [obj.properties]
  console.log(props, 'PROPS')
  var headers = 'firstName,lastName,county,city,role,sales';
  var output = headers + '\r\n';
  for (var key in props[0]) {
    output += '"' + key + '",' + props[key] + '\r\n';
  }
  res.render('index', {data: output});
  // res.sendFile('index.html', {'root': 'client'})
})



app.listen(3000, () => {
  console.log('Server is running')
})