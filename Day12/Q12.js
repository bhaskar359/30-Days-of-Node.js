const express = require("express");
const PORT = 8080;
const Q12 = express();

const mapCounter = new Map();
function rateLimitMiddleware(req, res, next) {
  const { ip } = req;
  let maxRequests = 5;
  let timeLimit = 60000;
  if (mapCounter && mapCounter.has(ip)) {
    let requestData = mapCounter.get(ip);
    let currentTimeStamp = Date.now();
    if (currentTimeStamp - requestData.timestamp <= timeLimit) {
      if (requestData.count >= maxRequests) {
        return res.status(429).json({ error: "Too many requests" });
      } else {
        requestData.count++;
        mapCounter.set(ip, requestData);
      }
    } else {
      mapCounter.set(ip, { count: 1, timestamp: currentTimeStamp });
    }
  } else {
    mapCounter.set(ip, { count: 1, timestamp: Date.now() });
  }
  console.log(mapCounter);
  next();
}

Q12.use(rateLimitMiddleware);
Q12.get("/", (req, res) => {
  res.send("Hello Scaler :)");
});

Q12.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
