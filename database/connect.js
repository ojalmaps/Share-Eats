let mysql = require('mysql2');
let config = require('./config.js');
let connection = mysql.createConnection(config);

// let connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '1203',
//     database: 'todoapp'
// });

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

// let i_sql =`Insert into todo(id,firstname,city)
//           Values (4, 'Cat', 'Austin')`
// Method to add data to db 
//connection.query(i_sql);


// Method to delete from db 
let d_sql = `Delete from todo where id = ?`;
connection.query(d_sql,4, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log('Deleted rows',results.affectedRows);

});

// Method to display all data from db 
let q_data = `Select * from todo`;
connection.query(q_data,(error, results, fields) => {
if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

connection.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});
