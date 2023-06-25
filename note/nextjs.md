# nextjs

nextjs 如何忽略某一级静态路由？

```js
module.exports = {
  async rewrites() {
    return [
      {
        destination: '/background/:path*',
        source: '/dashboard/background/:path*',
      },
    ];
  },
};

```

> 以上代码会将 `/dashboard/background/` 下的所有路由都重定向到 `/background/` 下