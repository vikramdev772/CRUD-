const generateToken = require("./jwt.controller")
const store = require('./db'); 

function signin(req,res){
    const {username,password}=req.body;
    const token=generateToken()
    res.status(200).json({ 
        signin: " sucessfully signed in ",
        username: username,
        token:token
    })
    const d=`token: ${token}`
    store(d);
}

module.exports = signin