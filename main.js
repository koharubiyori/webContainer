const Koa = require('koa')
const serve = require('koa-static')
const historyApiFullback = require('koa-history-api-fallback')

const port = 8080
const rootPath = 'app'
const serveOptions = {
  maxAge: 60 * 30
}

const app = new Koa()

app.use(historyApiFullback())
app.use(serve(rootPath, serveOptions))

console.log('启动服务...')
app.listen(port, () => {
  console.log(`服务正在运行于：${port}端口`)
})
