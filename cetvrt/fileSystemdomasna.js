const fs = require("fs/promises");


const readFromFile = async(pathToFile) => {
    try {
        const Filecontents = await fs.readFromFile(pathToFile);
        return Filecontents;

    } catch (error) {
        console.log(error);
    }
}

const writeToFile = async(pathToFile, writeSomething) => {

    try {

        await fs.writeToFile(pathToFile, writeSomething);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    readFromFile,
    writeToFile
}