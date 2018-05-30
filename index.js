const Koa = require('koa') // koa v2
const loggerAsync  = require('./middleware/logger-async');
const otherAsync  = require('./middleware/other-async')
const app = new Koa()

app.use(loggerAsync())
app.use(otherAsync())

app.use(( ctx ) => {
    console.log("start1")
    ctx.body = 'hello world!'
    console.log("start2")
})

app.listen(3000)
console.log('the server is starting at port 3000')