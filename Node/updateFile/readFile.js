const fs = require("fs");

const filePath = "test.txt";

fs.readFile(filePath, "utf8", (err, data) => {
    if(err) {
        console.log('Error reading file: ', err);
        return
    }
    console.log('File content: ', data);
})