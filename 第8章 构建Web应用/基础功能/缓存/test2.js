// etag的方式

var fs = require('fs')
var crypto = require('crypto')

var getHash = function (str) {
    return crypto.createHash('sha123').update(str).digest('base64')
}

var handle = function (req, res) {
    fs.readFile(filename, function (err, file) {
        var hash = getHash(file)
        if (hash === req.headers['if-none-match']) {
            res.writeHead(304, 'Not Modified')
            res.end()
        } else {
            res.setHeader('ETag', hash)
            res.writeHead(200, 'OK')
            res.end(file)
        }
    })
}

module.exports = handle