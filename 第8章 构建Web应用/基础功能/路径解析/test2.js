// pathname: /controller/action/a/b/c

function callback (req, res) {
    const pathname = url.parse(req.url).pathname
    const pathList = pathname.split('/')
    const controller = pathList[1] || 'index'
    const action = pathList[2] || 'index'
    const args = pathList.slice(3) // 拿到不包括控制器+行为的pathname
    if (handles[controller] && handles[controller][action]) {
        handles[controller][action].apply(null, [req, res].concat(args))
    }
}   
