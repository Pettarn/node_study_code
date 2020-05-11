const http = require('http')
const fs = requrie('fs')
const zlib = require('zlib')
let filepath = 'test.html'

const server = http.createServer(function(req, res) {
    let acceptEncoding = req.headers['accept-encoding']
    res.writeHead(200, 'OK')
    if (acceptEncoding.indexOf('gzip') !== -1) {
        let gzip = zlib.createGzip()
        res.setHeader('content-encoding', 'gzip')
        fs.createReadStream(filepath).pipe(gzip).pipe(res.end)
    } else {
        fs.createReadStream(filepath).pipe(res.end)
    }
})

server.listen(3000)