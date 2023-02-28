const express = require("express")
const router = express.Router()
const { createUser, userLogin,getUser ,updateUser,deleteuser} = require("../controllers/userController")
const { createpost,getpost ,updatepost,deletepost} = require("../controllers/postController")

const {authentication, authorisation }= require("../middleware/auth")

router.get("/test-me", (req, res) => {
    res.send("first api")
})

router.post("/register", createUser)

router.post("/login", userLogin)

router.get("/getUser",authentication,getUser)

router.put("/updateUser/:userId",authentication,authorisation,updateUser)

router.delete("/deleteUser/:userId",authentication,authorisation,deleteuser)

router.post("/createpost",createpost)

router.get("/getpost/:userId",getpost)

router.put("/updatepost/:userId/:postId",updatepost)

router.delete("/deletepost/:userId/:postId",deletepost)




module.exports = router