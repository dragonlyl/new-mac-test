const SourceMapUploader = require('./source-map-upload');
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir);
}
module.exports = {
//     // 基本路径
    // baseUrl: '/',
    //     // 输出文件目录
    //     outputDir: 'dist',
    //     // eslint-loader 是否在保存的时候检查
    //     lintOnSave: true,
    //     // use the full build with in-browser compiler?
    //     // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    //     compiler: false,
    //     // webpack配置
    //     // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    //     chainWebpack: () => {},
    // devtool: 'eval-source-map',
    publicPath: './',
    configureWebpack: (config) => {
        // 取消console打印
        if (process.env.NODE_ENV === 'production') {
        //     config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
            // config.devtool = 'source-map';
        } else {
            // config.devtool = 'source-map';
        }
        // 如果是多环境打包
        // if (process.env.NODE_ENV === 'production') {
        // config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        // }
        config.resolve = {
            extensions: ['.js', '.vue', '.json', '.css'],
            alias: {
                '@': resolve('src'),
                vue$: 'vue/dist/vue.runtime.esm.js',
                src: require('path').resolve(__dirname, 'src')
            }
        };
        // config.plugins.push(new SourceMapUploader({ url: 'http://localhost:3000/test/upload' }));
    },
    //     // vue-loader 配置项
    //     // https://vue-loader.vuejs.org/en/options.html
    //     vueLoader: {},
    //     // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // productionSourceMap: false,
    //     // css相关配置
    //     css: {
    //      // 是否使用css分离插件 ExtractTextPlugin
    //      extract: true,
    //      // 开启 CSS source maps?
    //      sourceMap: false,
    //      // css预设器配置项
    //      loaderOptions: {},
    //      // 启用 CSS modules for all css / pre-processor files.
    //      modules: false
    //     },
    //     // use thread-loader for babel & TS in production build
    //     // enabled by default if the machine has more than 1 cores
    //     parallel: require('os').cpus().length > 1,
    //     // 是否启用dll
    //     // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    //     dll: false,
    //     // PWA 插件相关配置
    //     // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    //     pwa: {},
    //     // webpack-dev-server 相关配置
    devServer: {
    //  open: process.platform === 'darwin',
    //  host: '0.0.0.0',
        port: 8089,
        proxy: {
            '/users': {
                target: 'http://localhost:8999',
                changeOrigin: true
            },
            '/images': {
                target: 'http://localhost:8999',
                changeOrigin: true
            }
        }
    //  https: false,
    //  hotOnly: false,
    //  proxy: null, // 设置代理
    //  before: app => {}
    }
//     // 第三方插件配置
//     pluginOptions: {
//      // ...
//     }
};
