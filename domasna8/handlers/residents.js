const e = require("express");
const Resident = require("../pkg/Resident")

const getAllResidents = async(req, res, next) => {
    try {
        const allResidents = await Resident.find();
        return res.status(200).json(allResidents);
    } catch (error) {
        return res.status(500).json(error)
    }
}


const createNewResident = async(req, res, next) => {

    const { name, hasCar, isBoomer } = req.body
    if (!name || !hasCar || !isBoomer) {
        return res.status(500).json("Missing data !")
    }
    try {
        await Resident.create({ name, hasCar, isBoomer });
        return res.status(200).json("Created a new resident")
    } catch (error) {
        return res.status(500).json(error)
    }
}


const updateResident = async(req, res, next) => {
    const _id = req.params._id;
    const { name, hasCar, isBoomer } = req.body;
    if (!name || !hasCar || !isBoomer) {
        return res.status(500).json("Missing data !")
    }
    try {
        await Resident.findByIdAndUpdate(_id, { name, hasCar, isBoomer })
        return res.status(200).json("Updated Resident")
    } catch (error) {
        return res.status(500).json(error)
    }

}

const deleteResident = async(req, res, next) => {
    const _id = req.params._id;
    try {
        await Resident.findByIdAndDelete(_id);
        return res.status(200).json("Deleted Resident")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    getAllResidents,
    createNewResident,
    updateResident,
    deleteResident
}