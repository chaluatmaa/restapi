const mongoose = require("mongoose");

mongoose
	.connect(
		"mongodb+srv://restapi:restapi@cluster0.exlxq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
		{
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then((res) => {
		console.log("connection successful");
	})
	.catch((e) => console.log("no connections"));
