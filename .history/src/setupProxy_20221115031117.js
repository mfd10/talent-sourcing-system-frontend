const { createProxyMiddleware } = require("http-proxy-middleware")


module.exports = app => {
    app.use(
        createProxyMiddleware('/candidates',
        {
            target:'http://localhost:8080/api/v1',
            changeOrigin:true
        })
    )
    app.use(
        createProxyMiddleware('/candidates/${id}',
        {
            target:'http://localhost:8080/api/v1',
            changeOrigin:true
        })
    )
}