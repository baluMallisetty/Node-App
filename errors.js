// This are the error codes

var error_1000 = {
	"message":{
		"sucess"     :0,
		"errorcode"  :1000,
		"description":"un-authorized",
		"environment":"test"
	}
}



var error_1001 = {
	"message":{
		"sucess"     :0,
		"errorcode"  :1001,
		"description":"invalid-request",
		"environment":"test"
	}
}


module.exports = {
	error_1000 : error_1000,
	error_1001 : error_1001
}