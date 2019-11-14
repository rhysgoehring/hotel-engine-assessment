const mcache = require('memory-cache');

const memCache = new mcache.Cache();

const memoryCacheMiddleware = (req, res, next) => {
  try {
    const key = `__hotelEngine__${req.body.searchTerm}`
    const cacheContent = memCache.get(key);
    if (cacheContent) {
      res.send(cacheContent)
    } else {
      res.sendResponse = res.send;
      res.send = body => {
        memCache.put(key, body);
        res.sendResponse(body);
      }
      next();
    }
  } catch (e) {
    console.log('memoryCacheMiddleware error', e);
    next();
  }
};

module.exports = memoryCacheMiddleware;
