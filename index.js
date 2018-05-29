const Koa = require("koa");
const app = new Koa();

app.use(async(ctx) => {
    var text = "hello koa1";
    await timeout().then((data) => {text = data});
    ctx.body = text
});

function timeout() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello koa2")
        }, 3000)
    })
}

app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');