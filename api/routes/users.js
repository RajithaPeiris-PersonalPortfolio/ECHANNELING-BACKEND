import express from "express";
import { 
    deleteUser, 
    getUser, 
    getUsers, 
    updateUser 
} from "../controllers/user.js";
import { 
    verifyToken, 
    verifyUser 
} from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello User, You Are Now Logged In!");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hello User, You Are Now Logged In And You Can Delete Your Account!");
});

// UPDATE

router.put("/:id", updateUser);

// DELETE

router.delete("/:id", deleteUser);

// GET

router.get("/:id", getUser);

// GET ALL

router.get("/", getUsers);

export default router;