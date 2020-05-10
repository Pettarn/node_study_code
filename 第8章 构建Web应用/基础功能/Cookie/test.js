// cookie: name=fjh; age=21;
// cookie = {
//     name: 'fjh',
//     age: 21
// }
let parseCookie = function (cookie) {
    let cookies = {}

    if (!cookie) {
        return cookies
    }

    let list = cookie.split(';')

    for (let i = 0; i < list.length; i++) {
        let [key, value] = list[i].split('=')
        if (key) {
            cookies[key.trim()] = value
        }
    }

    return cookies
}

(function (req, res) {
    req.cookies = parseCookie(req.headers.cookie)
    handle(req, res)
})()

let handle = function (req, res) {
    res.writeHead(200, 'OK')
    if (!res.cookies.isVisit) {
        res.end("欢迎第一次来到动物园！")
    }
}

console.log(parseCookie("name=fjh; age=21;"))