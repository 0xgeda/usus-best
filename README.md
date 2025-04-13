# USUS.BEST - 网站导航

一个使用 Next.js 和 Supabase 构建的现代化网站导航应用。

## 功能特点

- 🎯 分类展示网站
- 🔍 实时搜索功能
- 🌓 支持亮色/暗色主题
- 📱 响应式布局设计
- 🖼️ 自动图片优化
- ⚡ 快速加载和渲染

## 技术栈

- **前端框架**: Next.js 15.3.0
- **UI 框架**: React 19.0.0
- **开发语言**: TypeScript
- **样式方案**: TailwindCSS
- **后端服务**: Supabase
- **字体**: Geist Font

## 开发环境要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn 或 pnpm
- Git

## 快速开始

1. 克隆项目

```bash
git clone [repository-url]
cd usus-best
```

2. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

3. 配置环境变量

在项目根目录创建 `.env.local` 文件：

```env
NEXT_PUBLIC_SUPABASE_URL=你的_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的_SUPABASE_ANON_KEY
```

4. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 数据库配置

### 表结构

1. categories 表

```sql
create table categories (
  id bigint primary key,
  name text not null,
  slug text not null unique,
  description text,
  icon text,
  sort_order integer not null default 0
);
```

2. websites 表

```sql
create table websites (
  id bigint primary key,
  title text not null,
  url text not null,
  description text,
  category_id bigint references categories(id),
  image_url text,
  is_featured boolean default false,
  sort_order integer not null default 0
);
```

## 项目结构

```
usus-best/
├── app/                    # Next.js 应用目录
│   ├── layout.tsx         # 根布局组件
│   ├── page.tsx          # 首页组件
│   └── globals.css       # 全局样式
├── components/            # React 组件
│   ├── CategoryList.tsx  # 分类列表组件
│   ├── Search.tsx        # 搜索组件
│   ├── WebsiteCard.tsx   # 网站卡片组件
│   └── ...
├── lib/                   # 工具函数和配置
│   └── supabase.ts       # Supabase 客户端配置
├── types/                 # TypeScript 类型定义
│   └── index.ts
├── public/               # 静态资源
└── ...配置文件
```

## 部署

### Vercel 部署

1. 在 Vercel 中导入项目
2. 配置环境变量
3. 部署

### 环境变量配置

在 Vercel 的项目设置中添加以下环境变量：

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 开发规范

- 使用 ESLint 进行代码检查
- 使用 Prettier 进行代码格式化
- 遵循 TypeScript 严格模式
- 组件使用 'use client' 指令标记客户端组件

## 性能优化

- 使用 Next.js Image 组件优化图片
- 实现组件级状态管理
- 使用 Promise.all 并行加载数据
- 实现响应式图片加载

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可证

MIT License - 详见 LICENSE 文件

## 联系方式

如有问题或建议，请提交 Issue 或 Pull Request。
