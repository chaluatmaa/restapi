const express = require("express");
const router = express.Router();
const MensRanking = require("../models/mens");

router.get("/mens", async (req, res) => {
	try {
		let result = await MensRanking.find().sort({ ranking: 1 });
		console.log(result);
		res.status(200).json({ result });
	} catch (e) {
		console.log(e);
		res.status(400).json({
			e,
		});
	}
});

router.get("/mens/:id", async (req, res) => {
	try {
		const _id = req.params.id;
		let result = await MensRanking.findById({ _id: _id });
		console.log(result);
		res.status(200).json({ result });
	} catch (e) {
		console.log(e);
		res.status(400).json({
			e,
		});
	}
});

router.patch("/mens/:id", async (req, res) => {
	try {
		const _id = req.params.id;
		let result = await MensRanking.findByIdAndUpdate({ _id: _id }, req.body, {
			new: true,
		});
		console.log(result);
		res.status(200).json({ result });
	} catch (e) {
		console.log(e);
		res.status(400).json({
			e,
		});
	}
});

router.delete("/mens/:id", async (req, res) => {
	try {
		const _id = req.params.id;
		let result = await MensRanking.findByIdAndDelete({ _id: _id });
		console.log(result);
		res.status(200).json({ result });
	} catch (e) {
		console.log(e);
		res.status(400).json({
			e,
		});
	}
});

router.post("/mens", async (req, res) => {
	try {
		const mensRecord = new MensRanking(req.body);
		await mensRecord.save();
		res.status(201).json({
			mensRecord,
		});
		console.log("\n", req.body, "\n");
		console.log("\n", mensRecord, "\n");
	} catch (e) {
		console.log(e);
		res.status(400).json({
			e,
		});
	}
});

module.exports = router;
