//@param {Number} n here 'n' is the number of n terms os fibo

function fibo(n){
    let first = 0; //by default the first number in series
    let second = 1; //by default the second number in series
    console.log(first); //print 1st number in series
    console.log(second); //print 2nd number in series
    for(let i = 0; i < n-2; i++){
        let temp = first //temporarly storing
        first = second //switching as required in fibonacci
        second = second+temp; //2nd must be a sum 
        console.log(second); //printing
    }
}
fibo(10);