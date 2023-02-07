//@param {Number} n here 'n' is the number of n terms os fibo

function fibo(n){
    let first = 0;
    let second = 1;
    console.log(first);
    console.log(second);
    for(let i = 0; i < n-2; i++){
        let temp = first
        first = second
        second = second+temp;
        console.log(second);
    }
}
fibo(10);