// Example of Asynchronous

function fun1() {
    console.log("Function 1 executing started");
    console.log("Function 1 executing completed");
}
function fun2() {
    console.log("Function 2 executing started");
    console.log("Function 2 executing completed");
}
function fun3() {
    console.log("Function 3 executing started");
    console.log("Function 3 executing completed");
}

function fun4() {
    console.log("Function 4 executing started");
    console.log("Function 4 executing completed");
}

fun1();
setTimeout(fun2,5000);
setTimeout(fun3,2000)
fun4();

/**  How It Works Internally :-
 
 1. Code runs in Call Stack (fun1 and fun4).
 2. Async task (fun2 and fun3) goes to Web APIs (background).
 3. After completion → goes to Callback Queue.
 4. Event Loop checks if stack is empty.
 5. Moves task back to Call Stack.
  
  */