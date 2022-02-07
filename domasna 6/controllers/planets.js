const Planets = require("../modules/Planets");

const addnewPlanets = async(req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json("Missing data");
    }

    try {
        await Planets.addnewPlanets({ name });
        return res.status(200).json("Added a planet");

    } catch (error) {
        return res.status(500).json(error);
    }

};

const getallPlanets = async(req, res) => {
    try {

        const allPlanets = await Planets.getPlanets();
        return res.status(200).json(getPlanets);

    } catch (error) {
        return res.status(500).json(error);
    }
}

const updatePlanets = async(req, res) => {
    const { id, name } = req.body;

    if (!id || !name) {
        return res.status(400).json("Missing data")

    }

    try {
        await Planets.editPlanets({ id });
        return res.status(200).json("Edited planet");
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deletePlanet = async(req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json("Missing data")
    }

    try {
        await Planets.deletePlanets(id);
        return res.status(200).json("Deleted planet")
    } catch (error) {
        return res.status(500).json(error)
    }
};

module.exports = {
    addnewPlanets,
    getallPlanets,
    updatePlanets,
    deletePlanet
}