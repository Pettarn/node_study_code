const url = require('url')

const key = 'session_id'
const sessions = {}

const getUrl = function (_url, key, value) {
    let obj = url.parse(_url, true)
    obj.query[key] = value
    return url.format(obj)
}

function callback (req, res) {
    const redirect = function (url) {
        res.setHeader('Location', url)
        res.writeHead(302)
        res.end()
    }

    const id = req.query[key]
}