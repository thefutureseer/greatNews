
var mongoose = require("mongoose");

// Local Database Configuration with Mongoose
// mongoose.connect("mongodb://localhost/goodnews", function(error)
// 	{if(error) throw error;
// 	console.log("Database connected");
// });

//  database
mongoose.connect("mongodb://heroku", function(err) {
	if(err) throw err;
	console.log('database connected');
});
