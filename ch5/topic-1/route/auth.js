const express = require("express");
const router = express.Router();
const { register, login, profile } = require("../controller/auth");
const { authMiddleware } = require("../middleware/auth");
const { default: GoogleLogin } = require("../../../ch6/topic-1/src/components/GoogleLogin");

router.post("/register", register);
router.post("/login", login);
router.post("google-login", GoogleLogin);
router.get("/profile", authMiddleware(["user", "admin"]), profile);

module.exports = router;