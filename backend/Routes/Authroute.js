const { Login } = require("../Controllers/AuthController");
const { Signup } = require("../Controllers/AuthController");
const router = require("express").Router();
const  {userVerification} = require("../middlewares/authMiddleware");
router.post("/signup", Signup);
router.post('/login', Login);
router.post('/',userVerification);

module.exports = router;