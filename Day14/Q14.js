const express = require('express');
const Q14 = express();
const PORT = 8080;

const cache = {};

function cachingMiddleware(req, res, next) {
    const { url } = req;
    if (cache[url]) {
        const { response, timestamp } = cache[url];
        const cacheTime = 10 * 1000; // 10 seconds
        const respTime = Date.now() - timestamp
        if ( respTime < cacheTime) {
            console.log('Returning cached response for:', url, 'and time left: ', cacheTime-respTime);
            return res.send(response);
        } else {
            delete cache[url];
        }
    }
    next();
}

Q14.use(cachingMiddleware);

Q14.get('/', (req, res) => {
    const response = 'Hello Scaler';
    cache[req.url] = {response:"Cached: "+response, timestamp: Date.now() };
    res.send(response);
});

Q14.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
