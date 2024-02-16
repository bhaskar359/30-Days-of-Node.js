const express = require("express");
Q15 = express();
const PORT = 8080;

function loggingMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();

  const { method, url } = req;

  const headers = req.headers;
  let body = "";
  if (req.body) {
    body = JSON.stringify(req.body);
  }
  console.log("Timestamp:", timestamp);
  console.log("HTTP Method:", method);
  console.log("URL:", url);
  console.log("Request Headers:", headers);
  console.log("Request Body:", body);
  console.log("----------------------");

  next();
}

Q15.use(loggingMiddleware);

Q15.get("/", (req, res) => {
  res.send("Hello World!");
});

Q15.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
