const express = require("express");
const { registerController, loginController, currentUserController } = require("../controllers/authcontroller");

const authmiddleware = require("../middlewares/authmiddleware");
const router = express.Router();


//routes
//REGISTER || POST
router.post("/register", registerController);

router.post("/login", loginController);

router.get("/current-user", authmiddleware, currentUserController);

module.exports=router;