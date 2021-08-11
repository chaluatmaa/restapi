const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require("../src/database/connection");
const router = require("../src/routers/mens");

app.use(express.json());

// handing new POST request in REST API

app.get("/", (req, res) => {
	res.send("Use '/mens' to see the records");
});
app.use("/", router);

// app.get("/mens", async (req, res) => {
// 	try {
// 		let result = await MensRanking.find().sort({ ranking: 1 });
// 		console.log(result);
// 		res.status(200).json({ result });
// 	} catch (e) {}
// });

// app.get("/mens/:id", async (req, res) => {
// 	try {
// 		const _id = req.params.id;
// 		let result = await MensRanking.findById({ _id: _id });
// 		console.log(result);
// 		res.status(200).json({ result });
// 	} catch (e) {}
// });

// app.patch("/mens/:id", async (req, res) => {
// 	try {
// 		const _id = req.params.id;
// 		let result = await MensRanking.findByIdAndUpdate({ _id: _id }, req.body, {
// 			new: true,
// 		});
// 		console.log(result);
// 		res.status(200).json({ result });
// 	} catch (e) {}
// });

// app.delete("/mens/:id", async (req, res) => {
// 	try {
// 		const _id = req.params.id;
// 		let result = await MensRanking.findByIdAndDelete({ _id: _id });
// 		console.log(result);
// 		res.status(200).json({ result });
// 	} catch (e) {}
// });

// app.post("/mens", async (req, res) => {
// 	try {
// 		const mensRecord = new MensRanking(req.body);
// 		await mensRecord.save();
// 		res.status(201).json({
// 			mensRecord,
// 		});
// 		console.log("\n", req.body, "\n");
// 		console.log("\n", mensRecord, "\n");
// 	} catch (e) {
// 		console.log(e);
// 		res.status(400).json({
// 			e,
// 		});
// 	}
// });

app.listen(PORT, () => {
	console.log("Listening on available PORT");
});
