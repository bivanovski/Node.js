let sportsman = [{
        id: 1,
        name: "Ronaldo",
        sport: "football"
    },
    {
        id: 2,
        name: "Lebron James",
        sport: "basketball"
    },
    {
        id: 3,
        name: "Verstappen",
        sport: "formula 1"
    },
    {
        id: 4,
        name: "Chiesa",
        sport: "football"
    },
];

//create

const addnewsportsman = async(NewSportsman) => {

    const newSportsman = {
        id: sportsman.length + 1,
        name: NewSportsman.name,
        sport: NewSportsman.sport

    };

    sportsman.push(newSportsman)



};

// read

const getAllSportsman = async() => {
    return sportsman;
};

//update

const updateSportsman = async(argumentId, NewInfoSportsman) => {

    sportsman = sportsman.map((sportman) => {

        if (sportman.id === argumentId) {
            return {
                id: sportman.id,
                name: NewInfoSportsman.name,
                sport: NewInfoSportsman.sport
            };
        } else {
            return sportman;
        };

    });
};

// Delete
const deletesportsman = async(targetIdForDeletion) => {
    sportsman = sportsman.filter((sportman) => sportman.id !== targetIdForDeletion);
};

module.exports = {
    addnewsportsman,
    getAllSportsman,
    updateSportsman,
    deletesportsman,
};