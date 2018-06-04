const Router = require('koa-router')
const webAdminApi = require("./webAdminApi");
const webBizApi = require("./webBizApi");

let router = new Router()
router.use('/admin', webAdminApi.routes(), webAdminApi.allowedMethods())
router.use('/pc', webBizApi.routes(), webBizApi.allowedMethods());

module.exports = router;