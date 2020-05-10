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

console.log(parseCookie("name=fjh; age=21;"))