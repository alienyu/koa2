const Koa = require('koa')
const app = new Koa()
const path = require('path')
const static = require("koa-static");
const router = require("./router");

const loggerMiddleware = require("./middleware/logger-async.js");

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())
// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'
// 读取静态资源
app.use(static(
  path.join( __dirname,  staticPath)
))


app.listen(3000, () => {
    console.log('[demo] route-use-middleware is starting at port 3000')
})