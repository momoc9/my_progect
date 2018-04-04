// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('test.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(8080, () => {//端口号需要配置
    console.log('JSON Server is running')
})

// // 返回自定义格式数据
// router.render = (req, res) => {
//     console.log(res.locals.data)
//     res.jsonp({
//         data: res.locals.data,
//         status: 0,
//         msg: ''
//     })
// }

// server.listen(9090, () => {
//     console.log('JSON Server is running')
// })
