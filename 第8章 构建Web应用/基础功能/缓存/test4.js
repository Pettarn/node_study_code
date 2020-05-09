// Cache-Control max-age

const fs = require('fs')

let handle = function (req, res) {
    fs.readFile(filename, function (err, file) {
        req.setHeader('Cache-Control', "max-age=" + 1000 * 60 * 60)
        res.writeHead(200, 'OK')
        res.end(file)
    })
}