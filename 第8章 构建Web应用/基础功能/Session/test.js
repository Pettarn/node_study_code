const sessions = {}
const KEY = 'session_id'
const EXPIRES = 20 * 60 * 1000

const generate = function () {
    const session = {}
    session.id = new Date().getTime + Math.random()
    session.cookie = {
        expires: new Date().getTime() + EXPIRES
    }
    sessions[session.id] = session
    return session
}

function core (req, res) {
    let id = req.cookies[KEY]
    if (!id) {
        req.session = generate()
    } else {
        const session = sessions[id]
        if (session) {
            if (session.cookie.expires > new Date().getTime()) {
                session.cookie.expires = new Date().getTime() + EXPIRES
                req.session = session
            } else {
                delete sessions[id]
                req.session = generate()
            }
        } else {
            req.session = generate()
        }
    }
    handle(req, res)
}

function handle (req, res) {
    res.writeHead = function () {
        const cookies = res.getHeaders['Set-Cookie']
        const session = serialize(KEY, req.session.id)
        cookies = Array.isArray(cookies) ? cookies.concat(session) : [cookies, session]
        res.setHeader('Set-Cookie', cookies)
        return writeHead.apply(this, arguments)
    }
    res.writeHead(200, 'OK')
    if (!req.session.isVisit) {
        req.session.isVisit = true
        res.end('欢迎第一次访问！')
    } else {
        res.end('我们又见面了！')
    }
}