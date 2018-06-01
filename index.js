const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
const path = require('path')
const Router = require('koa-router')
const static = require("koa-static");
const loggerMiddleware = require("./middleware/logger-async.js");
// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static/admin'
// 读取静态资源
app.use(static(
  path.join( __dirname,  staticPath)
))

function readMockData(path) {
    return new Promise((resolve, reject) => {
        let viewUrl = `./mockData${path}.json`
        fs.readFile(viewUrl, "utf8", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// 子路由
let api = new Router()
api.post('/*', async (ctx) => {
    let resData = await readMockData(ctx.request.url);
    ctx.response.type = "application/json";
    ctx.response.body = resData;
})

// 装载所有子路由
let router = new Router()
router.use('/admin', api.routes(), api.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log('[demo] route-use-middleware is starting at port 3000')
})