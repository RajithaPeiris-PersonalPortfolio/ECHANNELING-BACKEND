import Clinic from "../models/Clinic.js";

// CREATE CLINIC

export const createClinic = async (req, res, next) => {
    const newClinic = new Clinic(req.body);
       
    try {
        const savedClinic = await newClinic.save();
        res.status(200).json(savedClinic);
    }   catch (err) {
        next(err);
    }
};

// UPDATE CLINIC

export const updateClinic = async (req, res, next) => {
    try {
        const updatedClinic = await Clinic.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            { new: true }
        );
        res.status(200).json(updatedClinic);
    }   catch (err) {
        next(err);
    }
};

// DELETE CLINIC

export const deleteClinic = async (req, res, next) => {
    try {
        await Clinic.findByIdAndDelete(req.params.id);
        res.status(200).json("Clinic Has Been Deleted!");
    }   catch (err) {
        next(err);
    }
};

// GET CLINIC

export const getClinic = async (req, res, next) => {
    try {
        const clinic = await Clinic.findById(
            req.params.id
        );
        res.status(200).json(clinic);
    }   catch (err) {
        next(err);
    }
};

// GET ALL CLINICS

export const getClinics = async (req, res, next) => {
    try {
        const clinics = await Clinic.find();
        res.status(200).json(clinics);
    }   catch (err) {
        next(err);
    }
};