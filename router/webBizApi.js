const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

function readWebBizMockData(filePath) {
    return new Promise((resolve, reject) => {
        let viewUrl = path.join( __dirname,  `/../mockData/web${filePath}.json`)
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
let webBizApi = new Router()
webBizApi.post('/aa', (ctx) => {
    ctx.response.type = "application/json";
    ctx.response.body = {a:1};
}).post('/*', async (ctx) => {
    let resData = await readWebBizMockData(ctx.request.url);
    ctx.response.type = "application/json";
    ctx.response.body = resData;
})


module.exports = webBizApi;
