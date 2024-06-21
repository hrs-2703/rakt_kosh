const express = require("express");
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController, getOrgnaisationController, getOrgnaisationForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require("../controllers/inventoryController");
const authmiddleware = require("../middlewares/authmiddleware");



const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authmiddleware, createInventoryController);

router.get("/get-inventory", authmiddleware, getInventoryController);

//GET DONAR RECORDS
router.get("/get-donars",  authmiddleware, getDonarsController);

//GET HOSPITAL RECORDS
router.get("/get-hospitals", authmiddleware, getHospitalController);

//GET orgnaisation RECORDS
router.get("/get-orgnaisation", authmiddleware, getOrgnaisationController);

router.get(
  "/get-orgnaisation-for-hospital",
 authmiddleware,
  getOrgnaisationForHospitalController
);
//GET RECENT BLOOD RECORDS
router.get(
  "/get-recent-inventory",
 authmiddleware,
  getRecentInventoryController
);

//GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
 authmiddleware,
  getInventoryHospitalController
);
router.post(
  "/get-inventory-hospit",
 authmiddleware,
  getInventoryHospitalController
);
module.exports = router;