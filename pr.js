/*JavaScript Promise are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code. Multiple callback functions would create callback hell that leads to unmanageable code. Promises are used to handle asynchronous operations in JavaScript. 

The promise constructor takes only one argument which is a callback function
The callback function takes two arguments, resolve and reject
Perform operations inside the callback function and if everything went well then call resolve.
If desired operations do not go well then call reject.





*/

let promise = new Promise(function (resolve, reject) {
	const x = "Hello";
	const y = "hi"
	if (x === y) {
		resolve();
	} else {
		reject();
	}
});

promise.
	then(function () {
		console.log('Success, You are a Awesome');
	}).
	catch(function () {
		console.log('Some error has occurred');
	});
