function factorial(n){
    let f=1;
    for(var i=1;i<=n;i++){
        f*=i;
    }
    return f;
}

module.exports ={fact:factorial}