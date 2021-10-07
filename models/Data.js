const mongoose = require("mongoose")

const Dataschema = new mongoose.Schema({

    username:{

        type: String,
        required: true,

    },usertext:{

        type: String,
        required: true,


    },






});

const Data = mongoose.model("Data", Dataschema)
module.exports = Data;