const express = require("express");
const {
    updateUser,
    deleteUser,
    getUser,
    getUsers,
    createUser,
} = require("../controllers/user.js");
const { verifyAdmin, verifyToken, verifyUser } = require("../utils/verifyToken.js");

const router = express.Router();


//ADD
router.post('/add', createUser)

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

module.exports = router;