module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4567',
                secure:false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''   //重写接口
                  }
            }
        }
    }
}