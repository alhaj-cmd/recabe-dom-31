const numbers = [4, 50, 7, 77, 11, 8];
const avarageSum = numbers => {
    const numLength = numbers.length;
    let sumOf = 0;
    for(const number of numbers){
        const square = Math.pow(number,2)
        sumOf = sumOf + square;
    }
    return (sumOf/numLength);
}
console.log(avarageSum(numbers));