// parent.js
const { fork } = require("child_process");

// Start child process
const child = fork("./child.js");

console.log("Parent process started...");

// Send task to child
child.send({ task: "heavyCalculation" });

// Listen for result from child
child.on("message", (result) => {
  console.log("✅ Result from child:", result);
});

// Example async work in parent (not blocked)
let count = 0;
const interval = setInterval(() => {
  console.log(`Parent is still responsive... count = ${++count}`);
}, 200);

setTimeout(() => {
    clearInterval(interval);
    console.log('Main process completed');
}, 2000)


/*
Parent process started...
Child: received heavy calculation task...
Parent is still responsive... count = 1
Parent is still responsive... count = 2
✅ Result from child: { sum: 499999999067109000 }
Parent is still responsive... count = 3
Parent is still responsive... count = 4
Parent is still responsive... count = 5
Parent is still responsive... count = 6
Parent is still responsive... count = 7
Parent is still responsive... count = 8
Parent is still responsive... count = 9
Main process completed
*/