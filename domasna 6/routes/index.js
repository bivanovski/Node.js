const router = require("express").Router();

const {
    addnewPlanets,
    getallPlanets,
    updatePlanets,
    deletePlanet

} = require("../controllers/planets")

router.post("/planets", addnewPlanets);
router.post("/planets", getallPlanets);
router.post("/planets", updatePlanets);
router.post("/planets", deletePlanet);

router.use((req, res) => {
    res.status(404).json("Not found");
});

module.exports = (router);