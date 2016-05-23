var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'prototypeApp'
});

connection.connect(function(DB_Connection_error) {
	if (DB_Connection_error) {
		console.log(DB_Connection_error);
	}
	else{
		 console.log('connected as id ' + connection.threadId);
		 exports.connection = connection;
		 }
	
});

