// Expires

const fs = require('fs')

let handle = function (req, res) {
    fs.readFile(filename, function (err, file) {
        let expires = new Date()
        expires.setTime(expires.getTime() + 1000 * 60 * 60)
        res.setHeader('Expires', expires.toUTCString())
        res.writeHead(200, 'OK')
        res.end(file)
    })
}

module.exports = handle