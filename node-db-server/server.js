const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World!')
  });
  
app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

app.get("/api/getwishlist", (req, res) => {
  var userid = req.params.id;
  // searches in db for data 
  var wishlist = {
    'wishlist':[ 
      { 
        id: 1,
        hotelName: 'Wendy',
        menuitem: ['French Fries', 'Egg muffin']
      },
      {
        id: 2,
        hotelName: 'Chilies',
        menuitem:'Beef Tacos'
      }
    ]
  };
  res.send(wishlist);
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

