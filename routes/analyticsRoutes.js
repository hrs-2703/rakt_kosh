const express = require("express");
const authmiddleware = require("../middlewares/authmiddleware");
const {
  bloodGroupDetailsContoller,
} = require("../controllers/analyticscontroller");

const router = express.Router();

//routes

//GET BLOOD DATA
router.get("/bloodGroups-data",authmiddleware, bloodGroupDetailsContoller);

module.exports = router;