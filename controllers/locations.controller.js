const express = require("express");
// use this express property ( .Router() )
const locations = express.Router();
//bring in your model file via express.
//set is a variable to the actual database
const locationsArray = require("../models/location.model.js")

//This will get all the entries from the database
locations.get("/", (req, res) => {
    //* now you must think like an api -- create a more complete version --> what do you get back? : JSON 💡 --> your response should be JSON ... 
    res.json(locationsArray)
    console.log(locationsArray)
})

 module.exports = locations

