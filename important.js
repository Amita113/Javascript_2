//spread operator and destructuring

arr=[1,1,4,7]

function avg(a,b,c){

    return a+b+c/3;
}
// spread operator will spread the array elements 
let a = avg(...arr);
 let a1 = [2,3,...arr,5]
let arr1=[6,5,3]
let a2 =[...arr,...arr1]
console.log(a)
console.log(a1)
console.log(a2)