const express=require("express");
require("dotenv").config()
const app=express();
// const passport=require("passport")
// require("./passport-setup")
// var cors = require('cors')

// app.use(cors())

app.use(express.json())

// app.use(passport.initialize())


app.use('/',require('./routes/api/user_signup'))
app.use("/",require("./routes/api/user_login"))
app.use("/",require("./posts/bus_post")) 
app.use("/",require("./posts/get_bus_by_busNumber"))
app.use("/",require("./posts/get_all_buses"))


// app.get("/google",passport.authenticate("google",{scope:["profile","email"]}))
// app.get("/google/callback",passport.authenticate("google",{failureRedirect:"/signup"}),
// function(req,res){
//     res.redirect("/signup")
// })

PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`surver is running on ${PORT}`);
})
