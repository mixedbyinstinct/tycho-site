const mysql = require('mysql');
const path = require('path');

module.exports = function(app) {
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
        return res.json({
          successs: false, 
          message: err
        });
      }
      let sql = "SELECT * FROM albums";
      con.query(sql, function(err, result) {
        if (err) {
          return res.json({
            success: false, 
            message: err
          });
        }
        return res.json({
          success: true,
          albums: result
        })
      })
    })
  });
  
  app.get('/news', (req, res) => {
    const con = mysql.createConnection({
      host: 'mysql.tycho-site.instinctmxd.com',
      user: 'tychodb',
      password: 'flamingo-22',
      database: 'tychodb'
    })
    con.connect(function(err) {
      if (err) {
        return res.json({
          successs: false, 
          message: err
        });
      }
      let sql = "SELECT * FROM news";
      con.query(sql, function(err, result) {
        if (err) {
          return res.json({
            success: false, 
            message: err
          });
        }
        return res.json({
          success: true,
          newsData: result
        })
      })
    })
  });
};