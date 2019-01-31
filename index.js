const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const path = require('path')
const port = 3000
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
   message = req.query.message

   if(message == ''){
     message = 'please type an Input !!'
   }

   res.render('index',{msg: message})
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
