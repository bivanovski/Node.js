require("dotenv").config();
const http = require("http");
const app = require("./app");
const server = http.createServer(app)
const dbConnector = require("./config/db");

const PORT = process.env.PORT

dbConnector()
    .then(() => {
        server.listen(PORT, () => {
            console.log("Server running!")
        })
    })
    .catch((err) => {
        console.log(err)
    })