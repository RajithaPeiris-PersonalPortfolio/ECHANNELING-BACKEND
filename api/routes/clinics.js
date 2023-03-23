import express from "express";
import Clinic from "../models/Clinic.js";

const router = express.Router();

// CREATE

router.post("/", async (req, res)=>{
    
    const newClinic = new Clinic(req.body)
        
    try {
        const savedClinic = await newClinic.save();
        res.status(200).json(savedClinic);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE

router.put("/:id", async (req, res)=>{
    try {
        const updatedClinic = await Clinic.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            { new: true }
        );
        res.status(200).json(updatedClinic);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE

router.delete("/:id", async (req, res)=>{
    try {
        await Clinic.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Clinic Has Been Deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET

router.get("/:id", async (req, res)=>{
    try {
        const clinic = await Clinic.findById(
            req.params.id
        );
        res.status(200).json(clinic);
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET ALL

router.get("/", async (req, res)=>{
    try {
        const clinics = await Clinic.find();
        res.status(200).json(clinics);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;