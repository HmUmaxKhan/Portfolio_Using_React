const express = require("express");
const router = express.Router();
const Projects = require("../models/Projects");

router.post("/postProjects",
async (req, res) => {
    
    try {
        const {projectsCompany,projectsSvg,projectsParagraph,projectsLinkedIn} = req.body;

        let project = await Projects.findOne({projectsCompany: projectsCompany});
        if(project){res.status(400).json("projects already exists")}

        const newproject = new Projects({projectsCompany: projectsCompany, projectsSvg: projectsSvg, projectsParagraph: projectsParagraph, projectsLinkedIn: projectsLinkedIn});
        await newproject.save();
        res.status(200).json("projects is registered Successfully");
        
    } catch (err) {
        console.log(err);
      res.status(500).json({ errors: err})
    } 
})

// Fetching all the projectss 

router.get('/fetchProjects', 
async (req, res) => {
    try {
        let response = await Projects.find();
        res.status(200).json(response);
        
    }catch (err) {
        res.status(500).json({ errors: err})
      } 
})

module.exports = router;

