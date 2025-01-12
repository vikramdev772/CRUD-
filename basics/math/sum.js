function s(n){
        if(n==0){
            return 0;
        }
    return n+s(n-1);
}
// console.log(s(5));

function square(n){
    return n*n;
}

module.exports = { s:s ,square:square}