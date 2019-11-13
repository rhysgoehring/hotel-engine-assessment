const mcache = require("memory-cache");

const memCache = new mcache.Cache();

const memoryCacheMiddleware = (req, res, next) => {
  console.log('original searchTerm', req.body.searchTerm);
    const key = `__hotelEngine__${req.body.searchTerm}`
    // console.log('key', key);
    const cacheContent = memCache.get(key);
    if (cacheContent) {
      console.log('sending from cache!');
      // console.log('cacheContent', cacheContent);
      res.send(cacheContent)
    } else {
      res.sendResponse = res.send;
      res.send = body => {
        // console.log('body', body);
        memCache.put(key, body);
        // console.log('memCache searchTerm', req.body.searchTerm);
        res.sendResponse(body);
      }
      next();
    }
}

module.exports = memoryCacheMiddleware;
