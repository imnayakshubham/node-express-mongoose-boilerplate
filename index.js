const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { urlencoded } = require("express");
const dbConnection = require("./configureDB/db.js");
const userRoute = require("./routes/userRoute");

dotenv.config();
dbConnection()
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use("/users",userRoute)

app.listen(PORT, () => console.log(`Running at PORT ${PORT}`));
