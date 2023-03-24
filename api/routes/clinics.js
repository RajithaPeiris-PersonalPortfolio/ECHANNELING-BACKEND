import express from "express";
import { 
    createClinic, 
    deleteClinic, 
    getClinic, 
    getClinics, 
    updateClinic 
} from "../controllers/clinic.js";

const router = express.Router();

// CREATE

router.post("/", createClinic);

// UPDATE

router.put("/:id", updateClinic);

// DELETE

router.delete("/:id", deleteClinic);

// GET

router.get("/:id", getClinic);

// GET ALL

router.get("/", getClinics);

export default router;