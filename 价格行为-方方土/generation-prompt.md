# 单HTML教程页面生成提示词

## 任务描述

基于 MinerU 解析的 PDF 内容（markdown + 图片目录），制作一个单 HTML 教程页面，风格模仿 [price-action-course.vercel.app](https://price-action-course.vercel.app/)（暗色主题、卡片网格布局）。

## 源数据结构

```
resource/<书名>_副本/auto/
├── <书名>.md        # MinerU 解析的 markdown（含图片引用）
└── images/          # ~390 张 JPG 图片（哈希命名）
```

markdown 内的图片引用格式：
```markdown
![](images/hash.jpg)
```

## HTML 架构

单文件结构，无构建工具、无框架。

### 文件布局

```
/<项目目录>/
├── index.html                         # 单 HTML 文件
└── resource/<书名>_副本/auto/images/  # 图片（相对路径引用）
```

### 图片路径处理

HTML 中的图片路径需要从 markdown 的 `![](images/xxx.jpg)` 转换为：
```html
<img src="../resource/<书名>_副本/auto/images/xxx.jpg" alt="描述" loading="lazy">
```

## HTML 组件层级

```
Page
├── Nav Header (fixed top)
├── Hero Section
├── Container
│   ├── Stage 1 (chapter)
│   │   ├── Stage Header → 编号 + 标题 + 描述
│   │   └── Card Grid
│   │       ├── Regular Card / Key Concept Card / Full-width Card
│   │       └── ...
│   ├── Stage 2 ...
│   └── ...
├── Footer
├── Lightbox Overlay
└── Script (lightbox + nav scroll highlight)
```

## CSS 架构

### 设计变量

```css
:root {
  --bg-primary: #0d1117;        /* 主背景 */
  --bg-secondary: #161b22;       /* 卡片背景 */
  --bg-card-hover: #1c2128;      /* 卡片 hover */
  --text-primary: #e6edf3;       /* 主文字 */
  --text-secondary: #8b949e;     /* 次要文字 */
  --text-muted: #6e7681;         /* 弱化文字 */
  --accent-blue: #58a6ff;        /* 蓝色强调 */
  --accent-orange: #f0883e;      /* 多头/买入 */
  --accent-red: #f85149;         /* 空头/卖出 */
  --accent-green: #3fb950;       /* 案例 */
  --accent-purple: #bc8cff;      /* 总结 */
  --accent-yellow: #d29922;      /* 警告 */
  --border-color: #30363d;
  --border-radius: 12px;
  --card-radius: 8px;
  --header-height: 56px;
  --max-width: 1200px;
}
```

### 卡片网格系统

```css
.card-grid {
  display: grid;
  grid-template-columns: 1fr;                            /* 手机：1列 */
  gap: 16px;
}
@media (min-width: 700px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); } /* 平板：2列 */
}
@media (min-width: 1000px) {
  .card-grid.cols-3 { grid-template-columns: repeat(3, 1fr); } /* 桌面：3列 */
}
```

### 卡片类型

1. **普通卡片** (`.card`) — 默认，白色底、圆角、带边框
2. **关键概念卡片** (`.card.key-concept`) — 左侧 4px 彩色边框强调
3. **全宽卡片** (`.card.fullwidth`) — `grid-column: 1 / -1` 跨所有列

### 卡片标签

```css
.card-tag.concept  → 蓝色   用于核心概念
.card-tag.example  → 橙色   用于案例展示
.card-tag.summary  → 紫色   用于总结
.card-tag.case     → 绿色   用于案例分析
.card-tag.warning  → 红色   用于注意事项
```

### 响应式断点

- 默认：1列 + container padding 40px
- 700px：2列网格
- 1000px：3列网格（仅 `.cols-3`）
- 手机端：container padding 缩减至 16px

## 内容转换规则（Markdown → HTML）

| Markdown 元素 | HTML 对应 |
|---|---|
| `## 标题` | `.stage-title` — 章节标题 |
| `### 标题` | `.card-title` — 卡片标题 |
| 普通段落 | `.card-text` — 卡片内段落 |
| `- 列表项` | `<ul><li>` — 有序/无序列表 |
| `![](images/x.jpg)` | `<figure><img><figcaption>` — 图片+图注 |
| 强调概念（如`**背景大于信号K线**`） | `.key-concept` 卡片 + 彩色左边框 |
| `总结；`开头段落 | `.summary` 标签卡片 |

### 卡片结构模板

```html
<div class="card key-concept concept fullwidth">
  <span class="card-tag concept">核心概念</span>
  <div class="card-title">标题</div>
  <p class="card-text">描述文本</p>
  <ul class="card-list">
    <li>要点1</li>
    <li>要点2</li>
  </ul>
  <figure class="card-figure">
    <img src="..." alt="..." loading="lazy">
    <figcaption>图注</figcaption>
  </figure>
</div>
```

## JavaScript 功能

### Lightbox（图片点击放大）

```js
// 点击卡片图片 → 显示 lightbox overlay
// 点击 overlay / 按 ESC → 关闭
const lightbox = document.getElementById('lightbox');
const figures = document.querySelectorAll('.card-figure img');
figures.forEach(img => {
  img.addEventListener('click', e => {
    lightboxImg.src = this.src;
    lightbox.classList.add('active');
  });
});
lightbox.addEventListener('click', () => lightbox.classList.remove('active'));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') lightbox.classList.remove('active');
});
```

### 导航滚动高亮

```js
// 滚动时检测当前可见章节 → 高亮对应 nav link
const sections = document.querySelectorAll('.stage');
const navLinks = document.querySelectorAll('.header-nav a');
function updateNav() {
  var current = '';
  sections.forEach(section => {
    if (section.getBoundingClientRect().top <= 150) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
}
window.addEventListener('scroll', updateNav);
```

## 章节结构

每个章节的 HTML 模板：

```html
<section class="stage" id="chN">
  <div class="stage-header">
    <span class="stage-num">第X章</span>
    <h2 class="stage-title">章节名</h2>
  </div>
  <p class="stage-desc">章节描述</p>
  <div class="card-grid cols-2">
    <!-- 卡片列表 -->
  </div>
</section>
```

## 实施步骤

### 第一步：数据准备
1. 确认 markdown 文件路径和图片目录
2. 统计图片数量（确认完整）
3. 截取前 N 行作为起始内容（"先做前几章"场景）

### 第二步：HTML 骨架
1. 编写 DOCTYPE + head（meta, title, style）
2. CSS 变量定义
3. 基础布局样式（body, container, header）
4. 固定导航栏

### 第三步：CSS 样式系统
1. 卡片网格 + 响应式
2. 卡片类型（普通/关键概念/全宽）
3. 标签样式
4. 图片样式 + hover 效果
5. Lightbox overlay
6. Footer

### 第四步：内容填充
遍历 markdown 逐行转换：

1. `##` → 新章节（stage）
2. `###` → 新卡片（card）
3. 段落 + 图片 → 按上下文组合进卡片
4. 概念性内容 → `.key-concept` 卡片
5. 图片较多的章节 → `.cols-2` 网格

### 第五步：JavaScript
1. Lightbox
2. 导航滚动高亮
3. 平滑滚动（CSS `scroll-behavior: smooth`）

### 第六步：验证
- 在浏览器中打开 HTML
- 检查所有图片加载
- 检查导航高亮功能
- 检查响应式布局（手机/平板/桌面）
- 检查 Lightbox

## 注意事项

1. **图片路径**：HTML 与 markdown 在不同目录层级，需要使用 `../resource/...` 相对路径而非 `images/...`
2. **Container 包裹**：确保所有 stage 都在 `<div class="container">` 内，否则失去 `max-width: 1200px` 居中效果
3. **Nav 同步**：新增章节后，导航栏和 JS 的 `querySelectorAll('.stage')` 会自动匹配，无需额外修改
4. **内容分组**：多个段落 + 多张图片属于同一个主题时，放在同一张卡片内；图片较少时使用 `.fullwidth` 跨列
5. **标签选择**：根据内容性质选择合适的 `.card-tag`（concept/example/summary/case/warning）
