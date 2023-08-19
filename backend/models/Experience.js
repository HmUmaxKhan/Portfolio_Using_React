const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const experienceSchema = new Schema({
    experienceCompany:{
        type: String,
        unique: true,
        required: true
    },
    experienceSvg:{
       type: String,
    },
    experienceParagraph:{
        type: String,
    },
    experienceLinkedIn : {
        type : String,
    }
})

const Experience = mongoose.model('experience',experienceSchema);
module.exports = Experience;