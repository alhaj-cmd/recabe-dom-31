function add(first, second){
console.log(first, second)
if(second===undefined){
    second=5;
}
const result = first + second;
return result
}
const total = add(10)
console.log(total)