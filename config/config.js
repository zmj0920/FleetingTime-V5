// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';
import chainWebpack from'./chainWebpack'
const { REACT_APP_ENV } = process.env;

export default defineConfig({
  // hash: true,
  history: { type: 'hash' },
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    name: 'Admin',
    locale: true,
    ...defaultSettings,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  define: {
    REACT_APP_ENV: REACT_APP_ENV || '',
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'gzip', // stat  // gzip
  },
  metas: [
    {
      name: 'keywords',
      content: 'umi1, umijs1',
    },
    {
      name: 'description',
      content: '🍙 插件化的企业级前端应用框架。',
    },
    {
      bar: 'foo',
    },
  ],
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    bizcharts: 'BizCharts',
    // 'data-set': 'DataSet',
  },
  devtool: false,
  scripts: [
    'https://unpkg.com/react@16.8.6/umd/react.production.min.js',
    'https://unpkg.com/react-dom@16.8.6/umd/react-dom.production.min.js',
    'https://unpkg.com/bizcharts@3.5.5/umd/BizCharts.min.js',
  ],
  pwa: false,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // exportStatic: {},
  // chainWebpack
});
