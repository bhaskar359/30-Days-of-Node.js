const express = require('express');
const Q10 = express();
const path = require('path');
const PORT = 8080;

/**
 * Express application serving static files from the "public" directory
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function staticFileServer(req, res) {
    // Your implementation here
    res.sendFile(__dirname,'public');
}

Q10.use(express.static(path.join(__dirname,'public')));

Q10.get('/',staticFileServer);


Q10.listen(PORT,()=>{ 
    console.log(`Server is listening on ${PORT}`);
})