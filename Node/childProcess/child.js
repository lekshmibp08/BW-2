// child.js
process.on("message", (msg) => {
  if (msg.task === "heavyCalculation") {
    console.log("Child: received heavy calculation task...");

    // Heavy synchronous task (would normally block event loop)
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      sum += i;
    }

    // Send result back to parent
    process.send({ sum });
  }
});
