const mysql = require('mysql');
const path = require('path');

let filePath = path.join(__dirname, 'src', '143 cover.png');

const con = mysql.createConnection({
    host: 'mysql.tycho-site.instinctmxd.com',
    user: 'tychodb',
    password: 'flamingo-22',
    database: 'tychodb',
});

con.connect(function(err){
  if(err) {
    console.log(err);
  }
  
let sql = `INSERT INTO albums (Name, AppleUrl, SpotifyUrl, Path) VALUES (143, 'https://music.apple.com/us/album/the-143-algorhythm-ep/1646883421', 'https://open.spotify.com/album/7BA30stGZPngsjfKb4U0oO?si=bx5g5L9CQ0yPHKLFcyDZZw', ${filePath})`;
  con.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    console.log('saved');
  })
})