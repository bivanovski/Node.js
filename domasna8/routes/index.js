const router = require("express").Router();
const { getAllResidents, createNewResident, updateResident, deleteResident } = require("../handlers/residents")

const apiPrefix = process.env.API_PREFIX;

router.get(apiPrefix + "/residents", getAllResidents)
router.post(apiPrefix + "/residents", createNewResident)
router.put(apiPrefix + "/residents/:_id", updateResident)
router.delete(apiPrefix + "/residents/:_id", deleteResident)



module.exports = (router);