// explain through a function

// function sayMyName(name){

//     console.log(`My name is ${name}`);
// }

// what this function will log to console
// as an output. 
//then we can say we can only determine that
// with function call

// sayMyName("walter white");
// sayMyName("disney land");

//second we can determine the value of this keyword
//by determining how the function is called


/*
four ways to invoke a function

implicit binding
explicit binding
 new binding
 default binding
*/

//implicit rule will tell what this 
//refers to mostly

//implicit binding
// const person=
// {
//     name:'Vishwas',
//     sayMyName: function(){ // methos to be presie
// console.log(`My name is ${this.name}`)
//     }
// }

// to invoke function we use dot notation

//person.sayMyName()// to determine this key word inside saymyname function


// in implicit binding rule when a fuction is invoked with the dot notation 
// the object to left of dot is what this is refering.


// 2 ---function is seperated from the object

// explicit binding

function sayMyName(){ 
    console.log(`My name is ${this.name}`)
        }

// in this case we will explicilty specify the context when the function is called 

// in JS has a built in method call method to invoke a context with which function is invoked

//  sayMyName.call(person);

 /* new binding
 in Js we can invoke function using new key word this refering to an object
 
nothing but as a fuction constructor

 */
function Person(name){
    this.name=name
}
const p1= new Person("vishwas");
const p2= new Person("Henry");
// when a new object is invoked using new keyword 
//then this keyword invokes empty  object abd when we console
console.log(p1.name,p2.name);

//default binding or fallback binding
sayMyName(); //it does not have . notation, call method , new 
//so it is default binding to global scope
globalThis.name='super man'
sayMyName();

/* order of precedence
new binding
explicit binding
implicit
default 
*/

