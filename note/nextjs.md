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

Q&A

nextjs 使用app router 和使用pages的区别？

> 使用App Router：在这种方式下，你可以在pages文件夹中创建多个页面，然后使用Next.js的内置路由系统来导航到这些页面。你可以使用`<Link>`组件来创建链接，使用`<Router>`组件来处理路由逻辑。这种方式适用于简单的应用程序或需要自定义路由逻辑的情况。
>
> 使用Pages文件夹：在这种方式下，你可以在pages文件夹中创建多个页面，每个页面都是一个独立的文件。Next.js会根据文件名自动生成路由，例如/pages/about.js会生成/about的路由。这种方式适用于简单的应用程序或需要快速创建页面的情况。
>
> 使用App Router和使用Pages文件夹的区别在于路由的处理方式和灵活性。使用App Router可以更灵活地处理路由逻辑，例如在页面之间传递参数或处理动态路由。而使用Pages文件夹可以更快速地创建页面，不需要手动配置路由。

服务端组件和客户端组件使用场景？

| what do you want do?  | Server Component | Client Component |
|------------------|------------------|------------------|
| Fetch data.      | ✅ | ❌ |
| Access backend resources (directly) | ✅ | ❌ |
| Keep sensitive information on the server (access tokens, API keys, etc) | ✅ | ❌ |
| Keep large dependencies on the server / Reduce client-side JavaScript | ✅ | ❌ |
| Add interactivity and event listeners (onClick(), onChange(), etc) | ❌ | ✅ |
| Use State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc) | ❌ | ✅ |
| Use browser-only APIs | ❌ | ✅ |
| Use custom hooks that depend on state, effects, or browser-only APIs | ❌ | ✅ |
| Use React Class components | ❌ | ✅ |

写一下emoji 选中符

