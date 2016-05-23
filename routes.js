
var JWT = require('jsonwebtoken');
var validator = require('validator');
var App_Errors = require('./errors.js');
var DB_connection = require('./database.js');


//Sign up logic//
var signup = function (req,res) {
	//console.log(req);
if (req.body.email && validator.isEmail(req.body.email) && req.body.password > 5 && req.body.username.length > 3) {
	//forward the request
	console.log(req.body);
	res.send('we');
}
else{
	//Throw an error
	console.log(DB_connection.connection);
	res.send(App_Errors.error_1001);
}}
// End of sign up logic//



module.exports = {
	signup : signup
};