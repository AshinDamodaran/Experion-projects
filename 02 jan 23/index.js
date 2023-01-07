const number = [2, 17, 19, 3, 2, 9];
console.log(number);
let temp =0;
for(let i = 0; i<number.length; i++){
    for(let j = 0; j<number.length-i-1; j++){
        if(number[j] < number[j+1]){
            temp = number[j];
             number[j] = number[j+1];
            number[j+1] = temp;
        }

    }
}
console.log(number);
