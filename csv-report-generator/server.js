const express = require('express');
const app = express();
app.use(express.static('client'))



app.post('/', (req, res) => {
  console.log(req.body, 'REQ BODY')
  res.render('index.html')
})


app.listen(3000, () => {
  console.log('Server is running')
})