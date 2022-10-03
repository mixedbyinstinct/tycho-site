
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Setup
const app = express();
const port = process.env['REACT_APP_PORT'];
const config = require('./webpack.config.js');
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  serverSideRender: false,
  watchOptions: {
    // Due to iOS devices memory constraints
    // disabling file watching is recommended 
    ignored: /.*/
  }
});
app.use(middleware);
app.use(cors());
app.use(express.static(path.join(__dirname, 'text-files')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// API 
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/bio', (req, res) => {
  res.sendFile(path.join(__dirname, 'text-files', 'lorem.txt'));
});

app.get('/music', (req, res) => {
  const con = mysql.createConnection({
    host: 'mysql.tycho-site.instinctmxd.com',
    user: 'tychodb',
    password: 'flamingo-22',
    database: 'tychodb',
  })
  con.connect(function(err) {
    if (err) {
      return res.json({message: err});
    }
    let sql = "SELECT * FROM albums";
    con.query(sql, function(err, result) {
      if (err) {
        return res.json({message: err});
      }
      return res.json({
        success: true,
        albums: result
      })
    })
  })
})

// Launch app
app.listen(port, () => {
  console.log(
    'Launching app... http://localhost:' + port + '\n'
  );
});

// Register app and middleware. Required for better
// performance when running from play.js
try { pjs.register(app, middleware); } catch (error) { }
