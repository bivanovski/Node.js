const router = require("express").Router();
const fsOperations = require("./fileSystemdomasna")
const path = require("path");

const pathToFile = path.join(__dirname, "random1.txt");

router.post("/file", (req, res) => {
    const data = req.body.data
    fsOperations(pathToFile, data)
        .then((dataFromOperation) => {
            return res.status(200).json(dataFromOperation);
        })
        .catch((err) => {
            return res.status(500).json(err)
        })
})
router.get("/file", (req, res) => {

})

module.exports = router;