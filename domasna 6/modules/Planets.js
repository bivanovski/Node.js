let goodPlanets = [{
    id: 1,
    name: "Earth"

}];

const addPlanets = async({ name }) => {
    const newPlanets = {
        id: goodPlanets.length + 1,
        name: name
    };
    goodPlanets.push(newPlanets);
};

const getPlanets = async() => {
    return goodPlanets;
};

const editPlanets = async({ id, name }) => {
    goodPlanets = goodPlanets.map((planeta) => {
        if (planeta.id === id) {
            return {
                id: planeta.id,
                name
            };
        };
        return planeta;
    });
};

const deletePlanets = async(id) => {
    goodPlanets = goodPlanets.filter((planeta) => planeta.id !== id);
};

module.exports = {
    addPlanets,
    getPlanets,
    editPlanets,
    deletePlanets,
};