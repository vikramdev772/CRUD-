const route=require("express").Router()
const {s,square } = require("./math/sum")
const {fact}= require("./math/fact")

route.get("/",(req,res)=>res.json({api:"api endpoint"}))

route.get("/sum/:value",(req,res)=>{
    const n=req.params.value;
    const num = parseInt(n);
    const result=s(num);
    res.json({
        api : "/api/sum/:value",
        Test: "/api/sum/100",
        Value  : `${n}`,
        result: `${result}`
    })
})

route.get("/math",(req,res)=>{
    const n=parseInt(req.query.n);
    const r=s(n);
    res.json({
        message: `Sum of numbers from 1 to ${n}`,
        result: r,
        test: "/api/math?n=100"
    })
})

route.get("/math/fact",(req,res)=>{
    const n=parseInt(req.body.value);
    res.json({api: "/math/fact",value:n,fact:`${fact(n)},`})
    
})
// API :  curl -X GET http://127.0.0.1:4040/api/math/fact -H "Content-Type: application/json" -d "{\"value\":5}"
// {"api":"/math/fact","value":5,"fact":"120"}


module.exports = route;
