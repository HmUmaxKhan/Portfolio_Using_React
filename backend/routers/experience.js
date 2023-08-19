const express = require("express");
const router = express.Router();
const Experience = require("../models/Experience");

router.post("/postExperience",
async (req, res) => {
    
    try {
        const {experienceCompany,experienceSvg,experienceParagraph,experienceLinkedIn} = req.body;

        let experience = await Experience.findOne({experienceCompany: experienceCompany});
        if(experience){res.status(400).json("experience already exists")}

        const newexperience = new Experience({experienceCompany: experienceCompany, experienceSvg: experienceSvg, experienceParagraph: experienceParagraph, experienceLinkedIn: experienceLinkedIn});
        await newexperience.save();
        res.status(200).json("Experience is registered Successfully");
        
    } catch (err) {
        console.log(err);
      res.status(500).json({ errors: err})
    } 
})

// Fetching all the experiences 

router.get('/fetchExperience', 
async (req, res) => {
    try {
        let response = await Experience.find();
        res.status(200).json(response);
        
    }catch (err) {
        res.status(500).json({ errors: err})
      } 
})

module.exports = router;

