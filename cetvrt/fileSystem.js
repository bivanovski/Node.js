const fs = require("fs/promises");


const readFromFile = async(pathToFile) => {
    try {
        const fileCon = await fs.readFile(pathToFile);
        return fileCon;
    } catch (error) {
        console.log(error);
    }
}

const writeToFile = async(pathToFile, writeSomething) => {

    try {
        await fs.writeFile(pathToFile, writeSomething);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    readFromFile,
    writeToFile,
}