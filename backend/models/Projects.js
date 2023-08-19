const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const projectsSchema = new Schema({
    projectsCompany:{
        type: String,
        unique: true,
        required: true
    },
    projectsSvg:{
       type: String,
    },
    projectsParagraph:{
        type: String,
    },
    projectsLinkedIn : {
        type : String,
    }
})

const Projects = mongoose.model('project',projectsSchema);
module.exports = Projects;