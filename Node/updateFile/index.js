const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// Example: http://localhost:3000/updateFile/test.txt?name="Lekshmi"
app.get("/updateFile/:fileName", (req, res) => {
    const { fileName } = req.params;
    const { name } = req.query;

    const filePath = path.join(__dirname, fileName);

    if(fs.existsSync(filePath)) {
        const currDateTime = new Date().toString();

        fs.appendFile(
            filePath, 
            `\nUpdated by ${name} at ${currDateTime}`,
            (err) => {
                if(err)
                    return res.status(500).json({message: "File Updation Fialed"});
                res.status(200).json({message: "File Updated Successfully...!"})
            }
        )

    } else {
        res.status(404).json({message: "File Not Found"});
    }
})

app.listen(3000, () => {
    console.log("Server Connected...");    
})