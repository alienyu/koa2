function log(ctx) {
    console.log(ctx.method, ctx.header.host + ctx.url)
}

module.exports = function () {
    return async function (ctx, next) {
        log(ctx);
        console.log("start3")
        await next(11)
        console.log("start4")

    }
}