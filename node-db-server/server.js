const express = require("express");
const app = express();
const PORT = 8080;

let mysql = require('mysql2');
let config = require('./config.js');
let connection = mysql.createConnection(config);

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});


app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
    res.send('Hello World!')
  });
  
app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.send({ key: 'POST request to the homepage'});
    res.redirect("/");
});

app.post("/insert_item",(req,res) =>{
  // var item = req.body.food_item;
  // var hotelname = req.body.hotel_name;
  var item = "Food";
  var hotelname ="MAc";
  var location = "CA";
  let i_sql =`Insert into food_list(id,name,item,location,category)
              Values (1, '${hotelname}', '${item}', '${location}',1)`
  connection.query(i_sql);
  console.log('added item');
  res.redirect("/");
});


app.get("/getwishlist/:id", (req, res) => {
  //var userid = req.params.id;
  console.log(req.params.id);
  var id = 1;
  let q_sql = `SELECT * FROM food_list WHERE id = ` + mysql.escape(id);
  connection.query(q_sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results);
    res.send(results);
  });
  
});

app.get("/api/getrec:id", (req, res) => {
  var userid = req.params.id;
  var recommend = {
    'recommended':[
    {
      hotelName: 'Burger King',
      menuitem: 'French Fries'
    },
    {
      hotelName: 'Luna Grill',
      menuitem : 'Salmon Salad'
    }
  ]
};
  res.send(recommend);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));

