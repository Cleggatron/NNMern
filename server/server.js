require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const routes = require("./routes/workouts");


const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
});

app.use("/api/workouts", routes);


mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })
