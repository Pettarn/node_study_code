##  node常用API 

### url 
    url.parse
    将一个 url 解析成一个对象 obj
    obj.host 可以拿到域名+端口号
    obj.hostname 可以拿到域名
    obj.href 可以拿到整个url
    obj.origin 可以拿到源（从协议到端口号）
    obj.port 可以拿到端口号
    obj.pathname 可以拿到 url 的路径"/p/a/t/h"
    obj.query 可以拿到 url 的查询部分的 JSON 对象格式
    obj.search 可以拿到 url 的查询部分 "?key=value"

