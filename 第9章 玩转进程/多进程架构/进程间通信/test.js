// HTML5 web worker 创建工作线程，工作线程与主线程进行通信

let worker = new worker('worker.js')
worker.onmessage = function (e) {
    document.getElementById('result').textContent = e.data
}

// worker.js
let n = 1

search: while (true) {
    n += 1
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            continue search
        }
    }
    postMessage(n)
}

