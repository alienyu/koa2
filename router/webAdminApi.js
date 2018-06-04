const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

function readWebAdminMockData(filePath) {
    return new Promise((resolve, reject) => {
        let viewUrl = path.join(__dirname, `/../mockData/web${filePath}.json`)
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
let webAdminApi = new Router()
webAdminApi.post('/aa', (ctx) => {
    ctx.response.type = "application/json";
    ctx.response.body = {a:1};
}).post('/*', async (ctx) => {
    let resData = await readWebAdminMockData(ctx.request.url);
    ctx.response.type = "application/json";
    let cookie = ctx.cookies.get("cid");
    console.log(cookie);
    ctx.cookies.set(
        'cid',
        `hello world?${new Date()}`,
        {
            domain: 'localhost',  // 写cookie所在的域名
            path: '/',       // 写cookie所在的路径
            maxAge: 10 * 60 * 1000, // cookie有效时长
            expires: new Date('2018-11-15'),  // cookie失效时间
            httpOnly: false,  // 是否只用于http请求中获取
            overwrite: false  // 是否允许重写
          }
    )
    ctx.response.body = resData;
});

module.exports = webAdminApi;
