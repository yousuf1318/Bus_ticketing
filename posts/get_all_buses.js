
var knex = require("../config/db_connection")
const express = require("express");
// const jwt = require("jsonwebtoken");
// const passport = require('passport');
const router = express.Router()



 router.get("/allBuses", (req, res) => {
    knex.select("*")
    .from("buses")
    .then((data) => {
        res.send(data)
    }).catch((err) => {
        console.log(err);
    })
})


module.exports=router