// 子进程与主进程的通信  send 和 onmessage

// parent.js

const cp = require('child_process')
const parent = cp.fork(__dirname + '/child.js')

parent.on('message', function (m) {
    console.log('Parent has gotten', m)
})

parent.send({name: 'parent'})

// sub.js
process.on('message', function (m) {
    console.log('Child has gotten', m)
})

process.send({name: 'child'})
