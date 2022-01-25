const sportsman = require('./domasna');

sportsman
    .getAllSportsman()
    .then((sportisti) => {

        console.log(sportisti);
    })
    .catch((err) => {
        console.log(err);
    })

sportsman
    .addnewsportsman({ name: "Chiellini", sport: "football" })
    .then(() => {
        return sportsman.getAllSportsman();
    })
    .then((sportisti) => {
        console.log(sportisti);
    })
    .catch((greshka) => {
        console.log(greshka);
    })

sportsman
    .updateSportsman(1, { name: "Messi", sport: "football" })
    .then(() => {
        return sportsman.getAllSportsman();
    })
    .then((sportisti) => {
        console.log(sportisti);
    })
    .catch((greshka) => {
        console.log(greshka);
    })

const sportsmanDeleter = async() => {
    try {
        await sportsman.deletesportsman(2);
        const updatedSportsman = await sportsman.getAllSportsman;
        console.log(updatedSportsman);
    } catch (greshka) {
        console.log(greshka);
    }

};