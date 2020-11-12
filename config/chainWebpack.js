
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const isEnvProduction = process.env.NODE_ENV === 'production';
const assetDir = 'static';
export default (memo, { env, webpack, createCSSRule }) => {
    // 修改js，js chunk文件输出目录
    memo.output
        .filename(assetDir + '/js/[name].js')
        .chunkFilename(assetDir + '/js/[name].chunk.js');
    // 修改css输出目录
    memo.plugin('extract-css').tap(() => [
        {
            filename: `${assetDir}/css/[name].css`,
            chunkFilename: `${assetDir}/css/[name].chunk.css`,
            ignoreOrder: true,
        },
    ]);
    // 修改图片输出目录
    memo.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|webp|ico)(\?.*)?$/)
        .use('url-loader')
        .loader(require.resolve('url-loader'))
        .tap((options) => {
            const newOptions = {
                ...options,
                name: assetDir + '/img/[name].[ext]',
                fallback: {
                    ...options.fallback,
                    options: {
                        name: assetDir + '/img/[name].[ext]',
                        esModule: false,
                    },
                },
            };
            return newOptions;
        });

    // 修改svg输出目录
    memo.module
        .rule('svg')
        .test(/\.(svg)(\?.*)?$/)
        .use('file-loader')
        .loader(require.resolve('file-loader'))
        .tap((options) => ({
            ...options,
            name: assetDir + '/img/[name].[ext]',
        }));

    // 修改fonts输出目录
    memo.module
        .rule('fonts')
        .test(/\.(eot|woff|woff2|ttf)(\?.*)?$/)
        .use('file-loader')
        .loader(require.resolve('file-loader'))
        .tap((options) => ({
            ...options,
            name: assetDir + '/fonts/[name].[ext]',
            fallback: {
                ...options.fallback,
                options: {
                    name: assetDir + '/fonts/[name].[ext]',
                    esModule: false,
                },
            },
        }));
    // 添加gzip压缩
    memo.when(isEnvProduction, (config) => {
        config.plugin('compression-webpack-plugin').use(CompressionWebpackPlugin, [
            {
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp('\\.(js|css)$'),
                threshold: 10240,
                minRatio: 0.8,
            },
        ]);
    });
    memo.merge({
        optimization: {
            minimize: true,
            splitChunks: {
                chunks: 'async',
                minSize: 30000,
                minChunks: 3,
                automaticNameDelimiter: '.',
                cacheGroups: {
                    // 组件库相关
                    react: {
                        name: 'react',
                        chunks: 'all',
                        test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|moment|antd|@ant-design)[\\/]/,
                        priority: 12,
                    },
                    // 工具库相关
                    utils: {
                        name: 'utils',
                        chunks: 'all',
                        test: /[\\/]node_modules[\\/](lodash|ramda)[\\/]/,
                        priority: 11,
                    },
                    // 图表库相关
                    charts: {
                        name: 'charts',
                        chunks: 'all',
                        test: /[\\/]node_modules[\\/](echarts|bizcharts|@antv)[\\/]/,
                        priority: 11,
                    },
                    vendors: {
                        name: 'vendors',
                        chunks: 'all',
                        test: /[\\/]node_modules[\\/]/,
                        priority: 10,
                    },
                },
            },
        },
    });
}