function countNumber(num){

    //initializing count
    let count = 0;

    //loop that works till the number gets nil
    while(num != 0){

        //decreasing the length of the number
        num = Math.floor(num/10);

        //incrementing count after omitting number
        count = count + 1;
    }
    return (console.log(count))
}
countNumber(6786);