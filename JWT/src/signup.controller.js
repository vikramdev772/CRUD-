const store = require('./db'); 

function signUp(req,res){
    const name = req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    res.status(200).json({
        signUp: "Successfully signed up",
        name: name,
        email: email,
        password: password,
    });
    const data = `Name: ${name}, Email: ${email}, Password: ${password}\n`;
    store(data);
}
module.exports=signUp
