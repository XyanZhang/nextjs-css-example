# nextjs 项目结构

## app路由约定

+ layout    .js // Layout 布局
+ page      .js // Page 页
+ loading   .js // Loading 页
+ not-found .js // 404 页
+ error     .js // Error 页
+ global-error .js // 全局错误处理
+ route   .js // API endpoint 后端api
+ template .js // 重新渲染的布局
+ default .js // 默认

source: <https://juejin.cn/post/7221162775074734135>

```md
app
├── features
│   ├── metadata
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── template.tsx
│   ├── loading.tsx
│   └── error.tsx
├── page.tsx
├── layout.tsx
├── template.tsx
├── loading.tsx
├── error.tsx
└── not-found.tsx
```

```jsx
// 路由为 / 页面会组合成这样的代码结构
<Layout>
    <Template>
        <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loading />}>
                <Page />
            </Suspense>
        </ErrorBoundary>
    </Template>
</Layout>
```

```jsx
// 路由为 /features/metadata 页面的代码结构：
<Layout>
    <Template>
        <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loading />}>
                <Layout>
                    <Template>
                        <ErrorBoundary fallback={<Error />}>
                            <Suspense fallback={<Loading />}>
                                <Page />
                            </Suspense>
                        </ErrorBoundary>
                    </Template>
                </Layout>
            </Suspense>
        </ErrorBoundary>
    </Template>
</Layout>
```
