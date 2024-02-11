const express = require('express');
const app = express();
const PORT = 8080;
/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function requestLoggerMiddleware(req, res, next) {
    // Your implementation here
    console.log(`${Date.now()} - ${req.method} request received`)
    next();
}

app.use(requestLoggerMiddleware);

app.get("/hello",(req,res)=>{
    res.send("Hello World :)");
})
app.post('/post',(req,res)=>{
    res.send("Hello Scaler :)");
})

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})