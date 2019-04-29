const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000
// const { Client } = require('pg');
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data


app.use(urlencodedParser); 
app.use(express.static('public'))
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))



// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });

// client.connect();

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });


app.get('/', function (req, res) {
  res.render('index',{'bands': bands});
})

// app.listen(3002, function () {
//   console.log('partBpost listening on port 3002!')
// })


let bands =['the strokes', 'the avalanches', 'lcd soundsystem']

app.post('/processit', function(req, res) {
  var band = req.body.bandname;
 
  bands.push(band)

  res.render('index',{'bands': bands});
});
