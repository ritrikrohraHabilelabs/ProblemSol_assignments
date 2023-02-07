function primeFactorisation(num) {
    function isPrime(num) {

        //to check whether the divisor is prime or not
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j == 0) {
                return false; //false if the divisor is not prime
            }
        }
        return true; //true if the divisor is prime
    }
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) { //calling a function to check whether the divisor is prime or not
            while (num % i == 0) {
                console.log(i); //printing the prime factor
                num /= i; //dividing with the prime factor and checking it again with while loop
            }
        }
    }
    console.log(); //for a gap
}
primeFactorisation(100);
primeFactorisation(101);
primeFactorisation(5);