var knex = require("../config/db_connection")
const express = require("express");
// const jwt = require("jsonwebtoken");
// const passport = require('passport');
const router = express.Router()

router.post("/buses",(req,res)=>{
    const value={
        busName: req.body.busName,
        busNumber: req.body.busNumber,
        from: req.body.from,
        to: req.body.to,
        departure: req.body.departure,
        arrival: req.body.arrival,
        ticketFare: req.body.ticketFare,
        rating: req.body.rating,

    }
    knex.select("*").from('buses').insert(value).then((data)=>{
        res.status(200).json({msg:"Bus added successfully"})
        console.log("Bus added successfully");

    }).catch((err)=>{
        res.send(err)
    })

})

module.exports=router