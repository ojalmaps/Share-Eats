const express = require("express");
const app = express();
const PORT = 8080;
let food_num = 100; 
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
   item = req.body.food_item;
   hotelname = req.body.hotel_name;
   option = req.body.choice;
   category = 0;
   
   if (option == 'wish'){
      category = 1;
   }
       
  var location = "CA";
  let i_sql =`Insert into food_list(id,name,item,location,category)
    Values ('${food_num}', '${hotelname}', '${item}', '${location}','${category}')`
  connection.query(i_sql);
  food_num+=1;

  res.redirect("/");
});

app.post("/remove_item",(req,res) =>{
  var hotelname = req.body.hotel_name;

  let d_sql =`Delete from food_list where id = ?`;

  connection.query(d_sql, `hotel_name`,(error,results,fields) =>{
    if (error) {
      return console.error(error.message);
    }
    console.log(results);
  });
  console.log('removed item');
  res.redirect("/");
});



app.get("/getwishlist", (req, res) => {
  //var userid = req.params.id;
  console.log('Getting wishlist');
  let q_sql = `SELECT * FROM food_list WHERE id = 4` ;
  connection.query(q_sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results);
    res.send(results);
  });

});

app.get("/api/getrec", (req, res) => {
  var userid = req.params.id;
  var recommend = {
    'recommended':[
    {
      id: 1,
      hotelName: 'Burger King',
      menuitem: 'French Fries'
    },
    {
      id: 2,
      hotelName: 'Luna Grill',
      menuitem : 'Salmon Salad'
    }
  ]
};
  res.send(recommend);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));

