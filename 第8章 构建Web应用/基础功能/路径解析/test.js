// 静态文件服务器

const url = require('url')

let handle = function (req, res) {
    let pathname = url.parse(req.url).pathname
    fs.readFile(Root + '/' + pathname, function (err, file) {
        if (err) {
            res.writeHead(404, 'Not Found')
            res.end('出错了')
        } else {
            res.writeHead(200, 'OK')
            res.end(file)
        }
    })
}

module.exports = handle