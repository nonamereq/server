const mongoose = require('mongoose');


const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
});


module.exports = new mongoose.model('Team', teamSchema);