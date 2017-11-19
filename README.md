# vue-cli-muti-pages

> 利用vue-cli构建多页面应用,每个页面是一个单独的单页应用，可使用前端路由，不使用去掉就行

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## 开发时需要修改的地方

### 修改build目录下的muti-pages-conf.js
利用vue-cli配置的多页面应用，每一个页面都是一个单页应用，每一个单页应用在src/app目录下，每增加一个单页应用需要在build目录下的muti-pages-conf.js配置增加的单页应用名称，这里要注意名字和应用的文件夹的名字一致！
```
module.exports = [
    {
        name: 'index'
    },
    {
        name: 'test'
    }
]
```

### 开发环境需要修改的配置
如果前端使用了路由，在开发的时候由于无法跳出当前的路由，所以在开发环境的时候入口文件需要配置当前修改的单页应用。修改build/webpack.dev.conf.js,修改的具体位置如下：

```
baseWebpackConfig.entry = {
  app: './src/app/index/main.js'   //路径改为需要修改的单页应用的路径，例如：app: './src/app/test/main.js'
}
```
```
 new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/app/index/index.html',  //路径改为需要修改的单页应用的路径，例如：template: 'src/app/test/index.html'
    inject: true
}),
```
### 生产环境
将使用npm run build生成的dist文件夹放在你的服务器上，每一个应用需要后端配置相应的路由,例如在backend文件夹里面写了一个简单的server配置的路由

## 参考项目
- [vue-admin](https://github.com/taylorchen709/vue-admin)