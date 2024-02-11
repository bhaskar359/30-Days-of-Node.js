const express = require('express');
const app = express();
const PORT = 8080

/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function greetHandler(req, res) {
    // Your implementation here
    let name = req.query.name || "";
    let result = name.length > 0 ? `Hello, ${name}` : "Hello, Guest";
    res.send(result);
}

app.get("/greet", greetHandler)

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})