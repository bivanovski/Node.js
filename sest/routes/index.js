const router = require("express").Router();
const { addNewSong, getAllSongs, updateSong, deleteSong } = require("../controllers/kafana");

router.post("/kafana", addNewSong)
router.get("/kafana", getAllSongs)
router.put("/kafana", updateSong)
router.delete("/kafana", deleteSong)

router.use((req, res) => {
    res.status(404).json("Not found");
});

module.exports = router;