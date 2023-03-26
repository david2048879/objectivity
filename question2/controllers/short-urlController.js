
const urls = [];
// Route to create a new short URL
exports.createNewShortUrl= async (req, res) => {
    const longUrl = req.body.url;
    const shortUrl = crypto.createHash('sha1').update(longUrl).digest('hex').slice(0, 8);
  
    // Check if the short URL already exists
    const existingUrl = urls.find(u => u.shortUrl === shortUrl);
    if (existingUrl) {
      // Short URL already exists, return it
      res.send(existingUrl.shortUrl);
      return;
    }
    // Short URL doesn't exist, insert it into the array
    urls.push({longUrl, shortUrl});
    res.send(shortUrl);
  };

// Route to redirect to the original URL
  exports.getOriginalUR = async(req, res) => {
    const shortUrl = req.params.shortUrl;
  
    // Look up the original URL in the array
    const url = urls.find(u => u.shortUrl === shortUrl);
    if (url) {
      // Original URL found, redirect to it
      res.redirect(url.longUrl);
      return;
    }
    // Original URL not found, return an error
    res.status(404).send('Not found');
  }