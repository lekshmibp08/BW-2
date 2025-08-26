import express from 'express';
const app = express();
const PORT = 3000;

function doubleNum(req, res, next) {
    let {a, b} = req.query;
     
    req.doubled = {a: a*2, b: b*2};
    next();
}

function logParamsMiddleware(req, res, next) {
    const queryParams = Object.keys(req.query || {});
    const pathParams = Object.keys(req.params || {});
    const bodyParams = Object.keys(req.body || {});

    console.log("🔍 Incoming Request Params:");
    console.log("Query Params:", queryParams.length ? queryParams : "None");
    console.log("Path Params:", pathParams.length ? pathParams : "None");
    console.log("Body Params:", bodyParams.length ? bodyParams : "None");

    next();

}

app.use(logParamsMiddleware);

// Example: http://localhost:3000/querySum?a=10&b=12
app.get('/querySum', doubleNum, (req, res) => {
    const {a, b} = req.doubled;
    const sum = a+b;

    res.json({ sum })
})

// Example: http://localhost:3000/paramSum/10/12
app.get('/paramSum/:num1/:num2', (req, res) => {
    let { num1, num2 } = req.params;
    num1 = Number(num1);
    num2 = Number(num2);

    const sum = num1 + num2;
    res.json({ num1, num2, sum });

})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
})

