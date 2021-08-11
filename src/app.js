const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require("../src/database/connection");
const router = require("../src/routers/mens");

app.use(express.json());

// handing new POST request in REST API

app.get("/", (req, res) => {
	res.send("Use https://ishanrestapi.herokuapp.com/mens to see the records");
});
app.use("/", router);

app.listen(PORT, () => {
	console.log("Listening on available PORT");
});
