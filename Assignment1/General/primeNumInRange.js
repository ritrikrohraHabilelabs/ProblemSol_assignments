function prime(start, end){
    if(start < end){
        for(let i = start; i <= end; i++){
            let count = 0;
            for (let j = 1; j < i; j++){
                if( i%j == 0){
                    count++;
                    if(count > 1){
                        break;
                    }
                }
            }
            if(count == 1){
                console.log(i);
            }
        }
    }
    else{
        console.log("'start' must be smaller than'end'");
    }
}
prime(1,100)