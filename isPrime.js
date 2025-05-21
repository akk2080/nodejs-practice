const isPrime = (n) => {

    if((typeof n) != 'number'){
        console.log("Input is not a number!");
        return;
    }

    if(n < 2){
        console.log(n + " is not a prime number");
        return;
    }
        
    for(let i = 2; i*i < n; i++){
        if(n%i == 0){
            console.log(n + " is not a prime number");
            return;
        }
    }
        
    console.log(n + " is a prime number");
}
const test1 = () => {
    console.log("helllooo");

}

module.exports = {isPrime};
