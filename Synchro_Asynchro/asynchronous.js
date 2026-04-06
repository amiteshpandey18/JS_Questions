//  Asynchronous (async) means:
//  JavaScript can execute long-running tasks in the background,
//  It does not block the main thread,
//  Other code continues running while waiting.

console.log("Start");

setTimeout(() => {
    console.log("Async Task");
}, 2000);

console.log("End");

/**  How It Works Internally :-
 1. Code runs in Call Stack.
 2. Async task goes to Web APIs (background).
 3. After completion → goes to Callback Queue.
 4. Event Loop checks if stack is empty.
 5. Moves task back to Call Stack. 
 
  */