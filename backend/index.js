const express = require('express');
const connectdb = require('./db');
const cors = require('cors');

connectdb();

const app = express();

app.use(express.json());

app.use("/api/Skill",require("./routers/skills"));

app.use("/api/Experience",require("./routers/experience"));

app.use("/api/Projects",require("./routers/projects"));

app.listen(5000, ()=>{
    console.log("Connected to port 5000");
})