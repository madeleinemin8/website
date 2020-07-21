const express = require('express');
const app = express();
var path = require('path');

app.get('/', (req, res) => {
  res.render('index');
});
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');


const server = app.listen(process.env.PORT || 5000);