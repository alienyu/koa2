const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const webAdminApiCtrl = require("../controller/web/admin/webAdminApiCtrl");

// 子路由
let webAdminApi = new Router()
webAdminApi.post('/*', async (ctx) => {
    let resData = await webAdminApiCtrl(ctx.request.url);
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
    // ctx.response.type = "application/json";
    ctx.response.body = resData;
});

module.exports = webAdminApi;
