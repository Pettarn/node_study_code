const url = require('url')

const query = url.parse("http://hostname.com/a?key=value&key2=value2", true).search

console.log(query)

// const callback = function (req, res) {

// }

