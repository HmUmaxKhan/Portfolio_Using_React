const express = require("express");
const router = express.Router();
const Skill = require("../models/Skills");

// Making a post request

router.post("/post",
async (req, res) => {
    
    try {
        const {skillName,skillSvg,skillParagraph} = req.body;

        let skill = await Skill.findOne({skillName: skillName});
        if(skill){res.status(400).json("Skill already exists")}

        const newSkill = new Skill({skillName: skillName, skillSvg: skillSvg, skillParagraph: skillParagraph});
        await newSkill.save();
        res.status(200).json("Skill is registered Successfully");
        
    } catch (err) {
      res.status(500).json({ errors: err})
    } 
})

// Fetching all the skills 

router.get('/fetchSkill', 
async (req, res) => {
    try {
        let response = await Skill.find();
        res.status(200).json(response);
        
    }catch (err) {
        res.status(500).json({ errors: err})
      } 
})

module.exports = router;

