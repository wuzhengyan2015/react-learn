## Loign模块

由于不怎么会后端，登录模块前端实现，nodejs待学习

登录时选择“记住我”会把账号密码存储在localStorage，下次进入页面时进行登录校验

待优化：

+ 会话保持，没选“记住我”登录后刷新会话消失。可以把信息存在cookie或localstorage中，“记住我”就设置失效时间

+ nodejs写后端，token实现认证

知识点：

+ cookie：可设置失效时间，没有设置的话，默认是关闭浏览器后失效
+ localStorage：除非被手动清除，否则将会永久保存。
+ sessionStorage： 仅在当前网页会话下有效，关闭页面或浏览器后就会被清除。

h5-template-show

Token存在cookie中，随API请求发给服务端，无权限情况下返回401，前端跳转login


## webpack splitChunk

```js
entry: {
  app: './src/index.js',
  vendor: ['react', 'react-dom']
},
optimization: {
  splitChunks: {
    cacheGroups: {
      vendor: {
        name: 'vendor',
        chunks: 'initial',
        minChunks: 2
      }
    }
  }
}
```

目前打包，按需加载模块单独打包出来，react库也单独打包出来。

splitChunks默认使用aysnc（处理按需加载模块）

缓存组的vendor使用initial（效果入口的文件的react库会被提取，使用all的话会把按需加载模块的公共部分也加载进来）。同时这边注意设置minChunks, 不然app里面内容也全部被打包到vendor了。

