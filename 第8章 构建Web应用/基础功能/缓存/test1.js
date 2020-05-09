// 根据修改时间

var fs = require('fs')

var handle = function (req, res) {
    fs.slat(filename, function (err, slat) {
        var lastModified = slat.mtime.toUTCString()
        if (lastModified === req.headers['if-modified-since']) {
            res.writeHead(304, 'Not Modified')
            res.end()
        } else {
            fs.readFile(filename, function (err, file) {
                var lastModified = stat.mtime.toUTCString()
                res.setHeader('last-modified-since', lastModified)
                res.writeHead(200, 'OK')
                res.end(file)
            })
        }
    })
}

module.exports = handle