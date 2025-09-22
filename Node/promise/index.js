/*
function processUserData(name, callback) {
    console.log(`Processing data for ${name}...`);
    callback(name);
}

function displayUserData(user) {
    console.log(`User ${user} data processed successfully.`);
}

processUserData("Bob", displayUserData);
*/

function displayUserData(user) {
  console.log(`User ${user} data processed successfully.`);
}

const processUserData = (name) => {
  return new Promise((resolve, reject) => {
    if (name) {
      console.log(`Processing data for ${name}...`);
      resolve(name);
    } else {
      reject("No name provided");
    }
  });
};

processUserData("Bob")
.then(name => displayUserData(name))
.catch(err => console.log("Error: ", err))

/*
alternatively we can use the below code.

processUserData("Bob")
.then(displayUserData)
.catch(err => console.log("Error: ", err))

don't use it as .then(displayUserData()), use reference only.

If you write .then(displayUserData), func will be called later with the resolved value.

If you write .then(displayUserData()), func is called immediately, and its result is used instead.

*/

// Using async... await
const run = async (name) => {
  try {
    const user = await processUserData(name);
    displayUserData(user);
  } catch (error) {
    console.log("Error: ", error);
  }
};

run();                    // Error:  No name provided
run("Bob");                 // Processing data for Bob... //User Bob data processed successfully.
