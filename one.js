// let a = 10;
// function outer(){
//     let b = 20;
//     function inner(){
//         let c = 30;
//         console.log(a,b,c);
//     }
//     inner();
// }
// outer();
//lexical scoping how JS resolves variables when functions are nested it moves one set up untill reaches outer function
// Lexical scope is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function. The diagram below outlines the supposed hierarchy that the lexical scope maintains in JavaScript.

//counter value
// function outer(){
// let counter=0;
// function inner(){
// counter++
// console.log(counter);

// }
// inner();
// }
// outer();
// outer();

//closures

function outer(){
    let counter=0;
    function inner(){
        counter++;
        console.log(counter);
    }
    // return the inner function instead of invoking
    return inner;
}
const fn = outer()
fn();
fn();
//returning and invoking it twice

