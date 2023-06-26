# 路由系统

## 创建路由

nextjs使用基于文件系统的路由器，其中文件夹用于定义路由

### pages

+ app  // => /
  + page.tsx
  + dashboard // => /dashboard
    + page.tsx // dashboard页面逻辑代码

> page..js, .jsx, or .tsx 等文件扩展名都可以用于定义路由
> page 总是路由子树的叶子节点

### layout

> layout 和 page 定义在相同文件夹下，layout会包裹 page
> 父layout和子layout之间的数据传递是不可能的，但是你可以在一个路由中多次获取相同的数据，React会自动去重请求，而不会影响性能
> Layouts 不能操作当前 路由对象，可以在客户端组件中使用 `useSelectedLayoutSegment` or `useSelectedLayoutSegments`

顶层layout 叫 RootLayout, 必须包含 `html` 和 `body` 标签

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* seo 相关信息 */}
      <head></head>  
      <body>{children}</body>
    </html>
  )
}
```

template 用法说明: template 会被包裹在 layout 中，可以用于定义一些公共的逻辑, 子路由可以通过 `useTemplateData` 获取到 template 中的数据

Modifying `<head>`

> 修改 head 属性用于 seo

```tsx

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Next.js',
}
 
export default function Page() {
  return '...'
}
```

## 路由分组

### 组织路由不影响URL

source: <https://nextjs.org/docs/app/building-your-application/routing/route-groups>

```md
app
├── (features) // 使用括号包裹
│   ├── metadata // => 该文件对应路由为：/metadata 
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── template.tsx
│   ├── loading.tsx
│   └── error.tsx
├── page.tsx
├── layout.tsx
```
