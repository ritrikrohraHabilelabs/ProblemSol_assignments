function reverseNum(num){

    //initializing reverse number
    let rev = 0

    //loop that works till the number gets nil
    while(num != 0){

        //taking the right most number
        let rem = num % 10;

        //logic to have the right most number in the starting
        rev = rev * 10 + rem;

        //omitting the right most digit
        num = Math.floor(num / 10);
    }
    return console.log(rev);
}

reverseNum(1298)