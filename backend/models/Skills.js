const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const skillSchema = new Schema({
    skillName:{
        type: String,
        unique: true,
        required: true
    },
    skillSvg:{
       type: String,
    },
    skillParagraph:{
        type: String,
    }
})

const Skill = mongoose.model('skill',skillSchema);
module.exports = Skill;