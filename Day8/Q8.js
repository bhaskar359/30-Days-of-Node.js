const express = require("express");
const Q8 = express();
const PORT = 8080;
/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function positiveIntegerHandler(req, res) {
  let number = req.query.number;
  if (number >= 0) {
    res.send("Positive Number");
  } else {
    const error =  new Error("Negative Integer");
    error.status = 400;
    throw error;
  }
}

function customErrorHandler(err,req,res,next){
    res.status(400).send("Negative Number");
}

Q8.get("/positive", positiveIntegerHandler);
Q8.use(customErrorHandler)
Q8.listen(8080, () => {
  console.log(`Server is running on ${PORT}`);
});
