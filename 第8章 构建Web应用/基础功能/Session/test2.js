const url = require('url')

const key = 'session_id'
const sessions = {}
const EXPIRES = 20 * 60 * 1000 // 20min

const generate = function () {
    const session = {}
    session.id = (new Date()).getTime() + Math.random()
    session.cookie = {
        expire: (new Date()).getTime() + EXPIRES
    }
    sessions[session.id] = session
    return session
}

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

    if (!id) {
        const session = generate()
        redirect(getUrl(req.url, key, session.id))
    } else {
        let session = sessions[id]
        if (session) {
            if (session.cookie.expire > (new Date).getTime()) {
                session.cookie.expire = (new Date()).getTime() + EXPIRES
                req.session = session
                handle(req, res)
            } else {
                delete sessions[id]
                session = generate()
                redirect(getUrl(req.url, key, session.id))
            }
        } else {
            session = generate()
            redirect(getUrl(req.url, key, session.id))
        }
    }
}