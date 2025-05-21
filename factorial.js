const fact = (n)=>{
    if(n == 0 || n == 1)
            return 1;
    return n*fact(n-1);
}

const factorial = (n) => {
    console.log("factorial of " + n + " is " + fact(n));
}

module.exports = factorial;