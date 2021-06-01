var knex = require("../config/db_connection")
const express = require("express");
// const jwt = require("jsonwebtoken");
// const passport = require('passport');
const router = express.Router()


router.get("/buses/:number", (req, res) => {
    var number = req.params.number
    knex.select("*")
    .from("buses")
    .where("busNumber", number)
    .then((data) => {
        res.status(200).json(data)
    }).then((err) => {
        console.log(err);
    })
})


module.exports=router