const express = require("express");
require("dotenv").config();

const routes = require("./routes/workouts");


const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
});

app.use("/api/workouts", routes);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})