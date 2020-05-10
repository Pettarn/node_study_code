// key=value; path=/; domain=.a.com; httpOnly;
let serialize = function (key, value, opt) {
    let pairs = []
    pairs.push(key + '=' + encode(value))

    opt = opt || {}

    if (opt.httpOnly) pairs.push('HttpOnly')
    if (opt.path) pairs.push('Path=' + opt.path)
    if (opt.domain) pairs.push('Domain=' + opt.domain)
    if (opt.maxAge) pairs.push('Max-Age=' + opt.maxAge)
    if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString())
    if (opt.secure) pairs.push('Secure')

    return pairs.join('; ')
}

var handle = function (req, res) {
    if (!req.cookie.isVisit) {
        res.setHeader('Set-Cookie', serialize('isVisit', '1'))
        res.writeHead(200, 'OK')
        res.end('欢迎第一次来到英雄联盟！')
    } else {
        res.writeHead(200, 'OK')
        res.end('又见面了！')
    }
}