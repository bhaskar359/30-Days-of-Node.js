const express = require("express");
const jwt = require("jsonwebtoken");
const Q11 = express();
Q11.use(express.json());
const SECRET_KEY = "bhaskar359_secret_key"
const PORT = 8080;

const payLoad = {
  name: "30 Days Of Node.js",
  day: 11,
  platform: "scaler",
  user: "bhaskar359",
};

const accessToken = jwt.sign(payLoad, SECRET_KEY);
console.log(accessToken)

function authenticationMiddleware(req, res, next) {
  let authHeader = req.headers["authorization"];
  let token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, SECRET_KEY, (err, data) => {
    if (err) {
      console.log(err);
      return res.sendStatus(403);
    }
    console.log(data);
    next();
  });
}

Q11.get("/", authenticationMiddleware, (req, res) => {
  res.send("Response coming after jwt token validation successful :)");
});
Q11.listen(PORT, () => {
  console.log(`Server linstening on ${PORT}`);
});
