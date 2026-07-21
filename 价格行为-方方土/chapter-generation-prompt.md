# Al Brooks 价格行为 — 单章交互式教学页面生成提示词

## 任务描述

基于 MinerU 解析的 PDF 内容（markdown + 图片目录），为 Al Brooks《Trading Price Action: Trends》的**单个章节**生成一个高详细度、交互式的单 HTML 教程页面。

**核心原则：越详细越好，拆的越透彻越好。** 不是简单的 markdown→HTML 转换，而是对每句话进行深度概念拆解，配合交互元素帮助理解。

**最重要原则：忠实于原文。** Al Brooks 的每句话都是多年实战经验的结晶。生成的内容必须 100% 基于原文，不允许编造、臆测、或用 AI 的"常识"替代原文观点。原文中那些具有实战价值的金句，必须原文保留，不能被概括或改写。

**前提条件：执行者必须熟悉 Al Brooks 的价格行为学体系。** 这不是简单的文本格式转换，而是需要理解每一句话背后的交易逻辑。只有真正理解价格行为的人，才能判断哪些句子是"金句"、哪些是"重要概念"、哪些是"辅助说明"。如果对价格行为不熟悉，需要先通读全书，建立完整的知识框架。

---

## 一、源数据结构

```
resource/priceaction_trend/resources/mineru/al-brooks-vol1/AL+brooks第一卷趋势篇/auto/
├── AL+brooks第一卷趋势篇.md              # MinerU 解析的 markdown
├── AL+brooks第一卷趋势篇_content_list.json  # bbox 元数据（可选）
└── images/                                # ~154 张 JPG（哈希命名）
```

markdown 内图片引用格式：
```markdown
![](images/hash.jpg)
```

---

## 二、输出文件结构

```
/价格行为-方方土/al-brooks-chXX/index.html   # 单 HTML 文件
```

图片通过相对路径引用：
```html
<img src="../../resource/priceaction_trend/resources/mineru/al-brooks-vol1/AL+brooks第一卷趋势篇/auto/images/hash.jpg">
```

---

## 三、内容分析流程（生成前必做）

### Step 1：定位章节内容
在 markdown 文件中找到目标章节的起止行号。每章以 `## 第XX章` 开头，下一章的 `##` 为结束。

### Step 2：提取所有图表
记录该章节中所有 `![](images/xxx.jpg)` 的引用，统计图片数量和对应的图表编号（如"图 21.1"）。

### Step 3：逐句拆解内容
**这是最关键的步骤。** 对章节中的**每一句话**进行分析：

1. **判断内容价值层级**：
   - ⭐⭐⭐ **金句**（必须原文保留）：Al Brooks 的实战经验总结、反直觉洞察、交易铁律、具体数字/比例。例如："通道极少会顺势突破。当顺势突破出现时，突破通常会在五棒内失败。"
   - ⭐⭐ **重要概念**（需原文引用+解读）：核心定义、原理机制、变种描述。保留原文关键句，补充解读。
   - ⭐ **辅助说明**（可概括）：背景铺垫、过渡性语句。可用自己的话概括。

2. **逐句提取金句**：标记原文中所有具有实战价值的句子，记录其在 markdown 中的行号。

3. **识别术语**：标记所有专业术语（如"尖峰"、"通道"、"逃逸缺口"、"总在场内"），为后续制作术语提示做准备。

4. **识别交易规则**：提取所有"条件→行动→示例"格式的内容。

5. **识别图表分析**：记录每张图表的关键分析点（逐棒分析）。

### 必须掌握的 Al Brooks 核心理念

在判断句子价值时，需要理解以下 Al Brooks 价格行为学的核心框架：

**价格行为的本质**：
- 价格行为是所有市场参与者心理的直接反映
- 每根K线都是多空双方力量对比的结果
- 市场在趋势和交易区间之间不断转换

**关键概念体系**：
1. **趋势定义**：更高的高点和更高的低点（多头趋势），或更低的低点和更低的高点（空头趋势）
2. **突破**：价格突破重要的高点或低点，表示市场力量的释放
3. **回调**：趋势中的反向运动，是对趋势的测试
4. **通道**：趋势的延续形态，是倾斜的交易区间
5. **交易区间**：多空双方力量均衡的区域
6. **信号棒**：发出交易信号的特定K线形态
7. **入场棒**：实际触发入场的K线

**交易心理要点**：
- 机构投资者的行为决定了趋势的持续
- 零售交易者的止损被触发是趋势延续的动力
- 恐慌和贪婪是推动价格极端运动的核心力量
- 每次突破都会有人亏损，这是市场运行的基础

**Al Brooks 的独特洞察**：
- "好的交易是反直觉的" — 在大多数人恐惧时买入，在大多数人贪婪时卖出
- "市场总是对的" — 如果你的交易亏损，是你的判断有问题，不是市场
- "趋势一旦形成，就会持续到它结束为止" — 不要过早预测反转
- "每个信号都有失败的可能" — 必须管理风险，而不是追求完美入场

### Step 4：设计教学模块
将拆解后的内容组织为 5-7 个教学模块，每个模块聚焦一个主题。

**推荐的模块结构**：
```
模块一：核心定义（展开式概念卡片）
模块二：原理深入（理论详解 + 图表验证）
模块三：交易规则（规则卡片 + 条件→行动格式）
模块四：形态变种（对比表格 + 多图实例）
模块五：测量/计算（交互工具 + 目标位）
模块六：总结自测（关键公式 + 测验题）
```

---

## 四、HTML 架构

### 4.1 整体结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>第XX章：章节名 — Al Brooks 价格行为交易</title>
  <style>/* 所有 CSS 内联 */</style>
</head>
<body>
  <!-- 固定导航栏 -->
  <nav class="header">...</nav>

  <!-- Hero 区域 -->
  <section class="hero">...</section>

  <!-- 主内容区 -->
  <div class="container">
    <section class="stage" id="sec1">模块一</section>
    <section class="stage" id="sec2">模块二</section>
    <section class="stage" id="sec3">模块三</section>
    <section class="stage" id="sec4">模块四</section>
    <section class="stage" id="sec5">模块五</section>
    <section class="stage" id="sec6">模块六</section>
  </div>

  <!-- Lightbox -->
  <div id="lightbox">...</div>

  <!-- 所有 JavaScript 内联 -->
  <script>...</script>
</body>
</html>
```

### 4.2 导航栏

```html
<nav class="header">
  <div class="header-inner">
    <a class="header-logo">Al Brooks Ch.XX</a>
    <div class="header-nav">
      <a href="#sec1">模块一名称</a>
      <a href="#sec2">模块二名称</a>
      <!-- 每个模块一个链接 -->
    </div>
  </div>
</nav>
```

### 4.3 Hero 区域

```html
<section class="hero">
  <h1>第 XX 章：章节全名</h1>
  <p>Al Brooks · Trading Price Action: Trends</p>
  <div class="hero-stats">
    <div class="stat-item">
      <div class="stat-num">N</div>
      <div class="stat-label">教学模块</div>
    </div>
    <div class="stat-item">
      <div class="stat-num">N</div>
      <div class="stat-label">图表实例</div>
    </div>
    <div class="stat-item">
      <div class="stat-num">N</div>
      <div class="stat-label">交易规则</div>
    </div>
  </div>
</section>
```

### 4.4 章节结构

```html
<section class="stage" id="secN">
  <div class="stage-header">
    <span class="stage-num">模块N</span>
    <h2 class="stage-title">模块标题</h2>
    <p class="stage-desc">模块描述（一句话概括本模块要学什么）</p>
  </div>
  <div class="card-grid">
    <!-- 卡片列表 -->
  </div>
</section>
```

---

## 五、卡片系统

### 5.1 卡片类型

| 类型 | class | 用途 | 特征 |
|------|-------|------|------|
| 普通卡片 | `.card` | 一般内容 | 默认样式 |
| 关键概念卡片 | `.card.key-concept` | 核心理论 | 左侧 4px 彩色边框 |
| 全宽卡片 | `.card.fullwidth` | 跨列内容 | `grid-column: 1 / -1` |
| 可展开卡片 | `.card.expandable` | 需要折叠的长内容 | 点击标题展开/收起 |

### 5.2 卡片标签（card-tag）

```html
<span class="card-tag concept">核心概念</span>     <!-- 蓝色 -->
<span class="card-tag example">案例展示</span>     <!-- 橙色 -->
<span class="card-tag summary">总结</span>         <!-- 紫色 -->
<span class="card-tag case">图表实例</span>        <!-- 绿色 -->
<span class="card-tag warning">注意事项</span>     <!-- 红色 -->
<span class="card-tag rule">交易规则</span>        <!-- 青色 -->
<span class="card-tag quiz">测验</span>           <!-- 黄色 -->
```

### 5.3 卡片结构模板

**普通卡片**：
```html
<div class="card">
  <span class="card-tag concept">标签</span>
  <div class="card-title">标题</div>
  <p class="card-text">段落内容</p>
  <ul class="card-list">
    <li>要点1</li>
    <li>要点2</li>
  </ul>
</div>
```

**可展开概念卡片**（模块一推荐使用）：
```html
<div class="card key-concept expandable" onclick="toggleExpand(this)">
  <div class="card-header">
    <span class="card-tag concept">核心概念</span>
  </div>
  <div class="card-title">1. 概念名称</div>
  <div class="card-body">
    <div class="card-body-inner">
      <p class="card-text">详细解释...</p>
      <div class="highlight-box">
        <div class="hl-title">关键理解</div>
        <p class="card-text">重点补充说明</p>
      </div>
      <ul class="card-list">
        <li>要点1</li>
        <li>要点2</li>
      </ul>
    </div>
  </div>
</div>
```

**交易规则卡片**：
```html
<div class="rule-card">
  <div class="rule-condition">条件：XXX</div>
  <div class="rule-action">应该做：<strong>YYY</strong></div>
  <div class="rule-example">例：具体场景描述</div>
</div>
```

**原文引用卡片**（⭐⭐⭐ 金句必须使用此格式）：
```html
<div class="card key-concept fullwidth">
  <span class="card-tag concept">原文金句</span>
  <div class="card-title">引用标题</div>
  <blockquote class="original-quote">
    <p>「原文的每一个字都必须忠实保留，不允许改写、概括、或用近义词替换。」</p>
    <cite>— Al Brooks, 第XX章 第NN页</cite>
  </blockquote>
  <div class="highlight-box">
    <div class="hl-title">深度解读</div>
    <p class="card-text">用自己的话解释这句话的含义、背后的逻辑、以及在实战中如何应用。这里可以展开解读，但必须明确标注哪些是原文、哪些是解读。</p>
  </div>
  <div class="highlight-box" style="border-color: rgba(248,81,73,0.3); background: rgba(248,81,73,0.06);">
    <div class="hl-title" style="color: var(--accent-red);">实战要点</div>
    <p class="card-text">这句话在实际交易中意味着什么？应该怎么用？</p>
  </div>
</div>
```

**原文穿插引用**（在普通卡片中引用原文关键句）：
```html
<p class="card-text">通道具有以下特征：</p>
<blockquote class="inline-quote">
  「通道极少会顺势突破。当顺势突破出现时，突破通常会在五棒内失败，然后市场反转。」
</blockquote>
<p class="card-text">这意味着在通道内，你应该始终假设趋势会延续，除非有明确的反转信号。</p>
```

**图表实例卡片**：
```html
<div class="card fullwidth">
  <span class="card-tag case">图表实例</span>
  <div class="card-title">图 XX.N：图表标题</div>
  <figure class="card-figure">
    <img src="../../resource/.../images/hash.jpg" alt="描述" loading="lazy">
    <figcaption>图注说明</figcaption>
  </figure>
  <div class="highlight-box" style="margin-top:16px">
    <div class="hl-title">逐棒分析</div>
    <ul class="card-list">
      <li><strong>棒N</strong>：具体分析</li>
      <li><strong>棒M</strong>：具体分析</li>
    </ul>
  </div>
</div>
```

### 5.4 特殊组件

**四位一体可视化**（用于展示多个等价概念）：
```html
<div class="four-in-one">
  <div class="fio-item">
    <div class="fio-icon">图标</div>
    <div class="fio-label">概念名称</div>
    <div class="fio-desc">简短描述</div>
  </div>
  <!-- 3-4 个 fio-item -->
</div>
```

**术语悬浮提示**（glossary）：
```html
<span class="glossary">术语名称<span class="tooltip">术语的详细定义和解释</span></span>
```

**高亮框**（highlight-box）：
```html
<div class="highlight-box">
  <div class="hl-title">标题</div>
  <p class="card-text">内容</p>
</div>
```

**对比表格**：
```html
<div style="overflow-x:auto">
  <table class="comparison-table">
    <thead><tr><th>列1</th><th>列2</th></tr></thead>
    <tbody><tr><td>数据</td><td>数据</td></tr></tbody>
  </table>
</div>
```

**测量运动计算器**（交互工具）：
```html
<div class="calculator">
  <div class="calc-row">
    <div class="calc-field">
      <label>输入标签</label>
      <input type="number" id="input-id" value="默认值" step="0.25">
    </div>
    <div class="calc-field" style="min-width:auto; flex:0;">
      <label>&nbsp;</label>
      <button class="calc-btn" onclick="calcFunction()">计算</button>
    </div>
  </div>
  <div class="calc-results" id="results-id" style="display:none">
    <div class="calc-result-row">
      <span class="calc-result-label">结果标签</span>
      <span class="calc-result-value" id="res-xxx"></span>
    </div>
  </div>
</div>
```

---

## 六、CSS 设计系统

### 6.1 设计变量

```css
:root {
  --bg-primary: #0d1117;
  --bg-secondary: #161b22;
  --bg-card: #161b22;
  --bg-card-hover: #1c2128;
  --text-primary: #e6edf3;
  --text-secondary: #8b949e;
  --text-muted: #6e7681;
  --accent-blue: #58a6ff;
  --accent-orange: #f0883e;
  --accent-red: #f85149;
  --accent-green: #3fb950;
  --accent-purple: #bc8cff;
  --accent-yellow: #d29922;
  --accent-cyan: #39d2c0;
  --border-color: #30363d;
  --border-radius: 12px;
  --card-radius: 8px;
  --header-height: 56px;
  --max-width: 1200px;
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans SC', system-ui, sans-serif;
  --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', monospace;
}
```

### 6.2 卡片网格

```css
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 700px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1000px) {
  .card-grid.cols-3 { grid-template-columns: repeat(3, 1fr); }
}
```

### 6.3 关键样式清单

以下 CSS 组件必须包含：

| 组件 | 说明 |
|------|------|
| `.header` + `.header-inner` + `.header-nav` | 固定导航栏 |
| `.hero` + `.hero-stats` + `.stat-item` | Hero 区域 |
| `.container` | 内容居中容器 |
| `.stage` + `.stage-header` + `.stage-num` + `.stage-title` + `.stage-desc` | 章节 |
| `.card-grid` + 响应式断点 | 卡片网格 |
| `.card` + `.card.key-concept` + `.card.fullwidth` | 卡片类型 |
| `.card-tag` + `.card-tag.concept/example/summary/case/warning/rule/quiz` | 标签 |
| `.card-title` + `.card-text` + `.card-list` | 卡片内容 |
| `.expandable` + `.expandable .card-header` + `.expandable .card-body` | 可展开卡片 |
| `.glossary` + `.glossary .tooltip` | 术语提示 |
| `.highlight-box` + `.hl-title` | 高亮框 |
| `.rule-card` + `.rule-condition` + `.rule-action` + `.rule-example` | 规则卡片 |
| `.four-in-one` + `.fio-item` + `.fio-icon` + `.fio-label` + `.fio-desc` | 四位一体 |
| `.card-figure` + `figcaption` | 图表 |
| `.calculator` + `.calc-row` + `.calc-field` + `.calc-btn` + `.calc-results` | 计算器 |
| `.comparison-table` | 对比表格 |
| `.original-quote` + `.original-quote cite` | 原文大段引用 |
| `.inline-quote` | 行内原文引用 |
| `#lightbox` | 图片放大 |
| `.progress-bar` | 阅读进度 |

### 6.4 可展开卡片 CSS

```css
.expandable { cursor: pointer; user-select: none; }
.expandable .card-header { display: flex; align-items: center; gap: 8px; }
.expandable .card-header::after {
  content: '▸'; margin-left: auto; transition: transform 0.2s;
  color: var(--text-muted); font-size: 14px;
}
.expandable.open .card-header::after { transform: rotate(90deg); }
.expandable .card-body {
  max-height: 0; overflow: hidden; transition: max-height 0.3s ease;
}
.expandable.open .card-body { max-height: 2000px; }
.expandable .card-body-inner { padding-top: 12px; }
```

### 6.5 原文引用 CSS（核心：区分原文与解读）

```css
/* 大段原文引用 — 金句卡片内使用 */
.original-quote {
  margin: 16px 0; padding: 16px 20px;
  border-left: 4px solid var(--accent-blue);
  background: rgba(88,166,255,0.06);
  border-radius: 0 8px 8px 0;
}
.original-quote p {
  color: var(--text-primary); font-size: 15px; line-height: 1.8;
  font-style: italic; margin: 0;
}
.original-quote cite {
  display: block; margin-top: 8px; font-size: 12px;
  color: var(--text-muted); font-style: normal;
}

/* 行内原文引用 — 在普通段落中穿插使用 */
.inline-quote {
  margin: 12px 0; padding: 10px 16px;
  border-left: 3px solid var(--accent-cyan);
  background: rgba(57,210,192,0.05);
  border-radius: 0 6px 6px 0;
  font-size: 14px; color: var(--accent-cyan);
  font-style: italic; line-height: 1.7;
}
```

### 6.6 术语提示 CSS

```css
.glossary {
  color: var(--accent-blue); border-bottom: 1px dashed var(--accent-blue);
  cursor: help; position: relative;
}
.glossary .tooltip {
  display: none; position: absolute; bottom: 100%; left: 50%;
  transform: translateX(-50%); background: var(--bg-secondary);
  border: 1px solid var(--border-color); border-radius: 8px;
  padding: 12px 16px; font-size: 13px; color: var(--text-secondary);
  width: 280px; z-index: 50; line-height: 1.5;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}
.glossary:hover .tooltip { display: block; }
```

---

## 七、JavaScript 功能

### 7.1 必须包含的功能

| 功能 | 说明 |
|------|------|
| Lightbox | 点击图表放大查看，点击遮罩/ESC 关闭 |
| 可展开卡片 | `toggleExpand(card)` 切换 `.open` class |
| 导航滚动高亮 | 滚动时自动高亮当前模块的 nav link |
| 平滑滚动 | CSS `scroll-behavior: smooth` + `scroll-padding-top` |
| 测量运动计算器 | 输入价格 → 计算目标位 |
| 测验引擎 | 多选题 + 评分 + 答案解析 |

### 7.2 Lightbox

```javascript
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
document.querySelectorAll('.card-figure img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});
lightbox.addEventListener('click', () => lightbox.classList.remove('active'));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') lightbox.classList.remove('active');
});
```

### 7.3 可展开卡片

```javascript
function toggleExpand(card) {
  if (!card.classList.contains('expandable')) return;
  card.classList.toggle('open');
}
```

### 7.4 导航滚动高亮

```javascript
const sections = document.querySelectorAll('.stage');
const navLinks = document.querySelectorAll('.header-nav a');
function updateNav() {
  let current = '';
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

### 7.5 测量运动计算器

```javascript
function calcMeasuredMove() {
  const low = parseFloat(document.getElementById('spike-low').value);
  const high = parseFloat(document.getElementById('spike-high').value);
  if (isNaN(low) || isNaN(high) || low >= high) return;
  const range = high - low;
  document.getElementById('res-range').textContent = range.toFixed(2);
  document.getElementById('res-target1').textContent = (high + range).toFixed(2);
  document.getElementById('res-target2').textContent = (high + range).toFixed(2);
  document.getElementById('res-midpoint').textContent = (low + range / 2).toFixed(2);
  document.getElementById('calc-results').style.display = 'block';
}
```

### 7.6 测验引擎

```javascript
const quizData = [
  {
    q: '问题文本',
    options: ['选项A', '选项B', '选项C', '选项D'],
    correct: 0, // 正确选项索引
    explanation: '答案解析'
  },
  // ... 8-10 道题
];

let currentQ = 0, score = 0, answered = [];

function renderQuiz() {
  const container = document.getElementById('quiz-container');
  // 渲染当前题目
}

function answerQuiz(qi, oi) {
  if (answered.includes(qi)) return;
  answered.push(qi);
  const q = quizData[qi];
  // 标记正确/错误，显示解析
  if (answered.length === quizData.length) showScore();
}

function showScore() {
  // 显示最终得分和评语
}

function resetQuiz() {
  currentQ = 0; score = 0; answered = [];
  renderQuiz();
}
```

---

## 八、内容拆解方法论

### 8.1 原文忠实度原则（最高优先级）

**Al Brooks 的原文是唯一权威来源。** 生成内容时必须遵守：

1. **金句原文保留**：原文中具有实战价值的句子（交易铁律、具体数字、反直觉洞察），必须用 `<blockquote class="original-quote">` 原文保留，不允许改写、概括、或用近义词替换。
2. **解读与原文分离**：用 `highlight-box` 或独立段落标注"解读"，明确区分哪些是原文、哪些是解读。
3. **不编造内容**：如果原文没有提到某个观点，不要因为"听起来合理"就加入。宁可少写，不可瞎编。
4. **不夸大其词**：原文说"通常"，你不能改成"一定"。原文说"可能"，你不能改成"必然"。
5. **数字必须准确**：原文说"五棒内失败"，你不能改成"三棒内"。原文说"50%"，你不能改成"大多数"。

**验证方法**：生成完毕后，随机抽查 5 个金句，与 markdown 原文逐字对比。如有任何一个字不同，必须修正。

### 8.2 如何判断句子的实战价值

判断一个句子是否具有实战价值，需要从以下维度评估：

**维度一：可操作性**
- ✅ 高价值：能直接指导交易决策的句子
  - "一旦辨识出尖峰和通道趋势在起作用，不要做逆势交易"
  - "通道很少顺势突破，突破通常在五棒内失败"
- ❌ 低价值：纯理论描述，无法直接应用
  - "市场在某种程度上是随机的"

**维度二：反直觉程度**
- ✅ 高价值：违反大多数人直觉的洞察
  - "最好的买入时机是在市场看起来最弱的时候"
  - "亏损的交易者往往是对的，但他们过早平仓"
- ❌ 低价值：显而易见的常识
  - "趋势市场中应该顺势交易"

**维度三：具体性**
- ✅ 高价值：包含具体数字、比例、时间框架
  - "回调通常会回到均线附近"
  - "突破后第一根K线的收盘价很重要"
- ❌ 低价值：模糊的描述
  - "市场有时会回调"

**维度四：风险警示**
- ✅ 高价值：提醒常见错误和陷阱
  - "不要在通道内追涨杀跌"
  - "假突破是亏损的主要原因之一"
- ❌ 低价值：一般性建议
  - "注意风险管理"

**维度五：机构行为揭示**
- ✅ 高价值：解释机构投资者的行为逻辑
  - "大机构会在回调中积累头寸"
  - "止损被触发是趋势延续的动力"
- ❌ 低价值：只描述表面现象
  - "价格上涨是因为买盘多于卖盘"

**判断练习**：以下哪些句子应该作为金句保留？

1. "价格行为是所有市场参与者心理的直接反映" → ⭐⭐ 重要概念（需要解读）
2. "在强趋势中，回调通常很浅，而且很快被买回" → ⭐⭐⭐ 金句（具体、可操作、反直觉）
3. "市场由两种基本状态组成：趋势和交易区间" → ⭐⭐ 重要概念（核心定义，需要保留但可概括）
4. "永远不要在没有止损的情况下交易" → ⭐⭐⭐ 金句（风险警示，实战铁律）
5. "价格会在支撑和阻力位附近反应" → ⭐ 辅助说明（常识性描述）

### 8.3 概念拆解原则

对原文的每一句话，问自己：

1. **这句话在说什么？** → 提取核心概念
2. **为什么是这样？** → 解释原理机制
3. **实际交易中怎么用？** → 转化为交易规则
4. **有没有例外或变种？** → 补充边界情况
5. **哪个图表能说明？** → 关联具体图表

### 8.4 内容分组原则

- **同一概念的多个方面** → 放在同一张卡片内
- **多个并列的规则** → 用 `.card-grid` + 多个 `.rule-card` 展示
- **需要对比的内容** → 用 `.comparison-table`
- **长内容需要折叠** → 用 `.expandable` 卡片
- **图表 + 逐棒分析** → 放在 `.fullwidth` 卡片内
- **金句密集的段落** → 用多个 `original-quote` 逐句保留，不要合并概括

**重要提示**：理解每个句子在其所在段落和章节中的上下文很重要。Al Brooks 经常在前面铺垫概念，然后在后面给出关键结论。如果只提取结论而忽略铺垫，读者可能无法理解结论的含义。因此：
- 如果一个金句依赖于前面的铺垫，应该把相关铺垫也包含在卡片中
- 如果一个段落的多个句子共同构成一个完整观点，应该把它们放在一起解读
- 不要为了"精简"而割裂逻辑链条

### 8.5 原文内容量处理

Al Brooks 的原文通常信息密度极高，一句话可能包含多层含义。处理方式：

1. **宁多勿少**：如果原文有 20 个要点，不要只挑 10 个。全部保留，用 `.expandable` 折叠长内容。
2. **一句话一张卡片**：如果某句话包含丰富的实战经验，单独做一张卡片，用 `original-quote` + `highlight-box` 深度解读。
3. **段落拆分**：原文中一个长段落可能包含 3-4 个独立观点，拆成 3-4 张卡片分别阐述。
4. **图表分析要完整**：原文对每张图表的分析可能有 10+ 个要点，全部用 `card-list` 逐条列出。

### 8.6 模块数量指南

| 章节长度 | 推荐模块数 | 说明 |
|----------|-----------|------|
| < 200 行 | 4-5 个 | 精简版 |
| 200-400 行 | 5-6 个 | 标准版 |
| > 400 行 | 6-7 个 | 详细版 |

### 8.7 每个模块的卡片数量

- 模块一（核心定义）：5-10 个可展开卡片，每个概念一张
- 模块二（原理深入）：3-5 个卡片 + 1-2 个图表
- 模块三（交易规则）：4-8 个规则卡片 + 1-2 个图表
- 模块四（形态变种）：3-6 个变种卡片 + 对比表格 + 多个图表
- 模块五（测量/计算）：计算器 + 2-3 个概念卡片 + 图表
- 模块六（总结自测）：公式总结 + 关键规则 + 8-10 道测验题

---

## 九、图片路径处理

### 9.1 路径转换规则

markdown 中的引用：
```markdown
![](images/abc123.jpg)
```

HTML 中的路径（从 `/价格行为-方方土/al-brooks-chXX/` 出发）：
```html
<img src="../../resource/priceaction_trend/resources/mineru/al-brooks-vol1/AL+brooks第一卷趋势篇/auto/images/abc123.jpg">
```

**规则**：`../../resource/priceaction_trend/resources/mineru/al-brooks-vol1/AL+brooks第一卷趋势篇/auto/images/` + 文件名

### 9.2 图表分析要求

每张图表卡片必须包含：
1. **图表标题** — 如"图 21.1：三推中的尖峰和通道"
2. **图片** — 带 alt 和 loading="lazy"
3. **图注** — 一句话描述图表核心内容
4. **逐棒分析** — 在 `.highlight-box` 中，用 `<li>` 列出每个关键棒线的分析

逐棒分析示例：
```html
<ul class="card-list">
  <li><strong>棒6</strong> 是一个双棒上涨尖峰的一部分。从棒5低点开始的上涨运动非常陡峭。</li>
  <li>该通道包含<strong>三个上推</strong>，外形为楔形。</li>
  <li><strong>棒10</strong> 在趋势通道线处过冲，向下反转。</li>
</ul>
```

---

## 十、质量检查清单

生成完毕后，逐项验证：

### HTML 结构
- [ ] 6 个 `<section class="stage">` 存在
- [ ] 每个 stage 有 `stage-header` + `stage-num` + `stage-title` + `stage-desc`
- [ ] 所有 stage 在 `<div class="container">` 内
- [ ] 导航栏 nav links 数量 = stage 数量

### 内容完整性
- [ ] 章节中每张图表都在 HTML 中出现
- [ ] 每张图表有标题、图片、图注、逐棒分析
- [ ] 所有核心概念都有对应卡片
- [ ] 交易规则使用 `.rule-card` 格式

### 交互功能
- [ ] 可展开卡片点击能展开/收起
- [ ] 术语悬浮提示 hover 能显示
- [ ] Lightbox 点击图表能放大
- [ ] 导航栏滚动能自动高亮
- [ ] 测量运动计算器能正确计算
- [ ] 测验题能选择、评分、显示解析

### 样式
- [ ] 响应式布局（手机 1 列 / 平板 2 列 / 桌面 3 列）
- [ ] 暗色主题一致
- [ ] 卡片标签颜色正确
- [ ] 高亮框样式正确

### 图片
- [ ] 所有图片路径以 `../../resource/priceaction_trend/resources/mineru/al-brooks-vol1/AL+brooks第一卷趋势篇/auto/images/` 开头
- [ ] 所有图片文件实际存在（可用 `ls` 验证）
- [ ] 图片有 `loading="lazy"` 属性

### 原文忠实度（最关键）
- [ ] 所有金句使用 `<blockquote class="original-quote">` 格式保留
- [ ] 原文引用与解读内容有明确的视觉分隔
- [ ] 随机抽查 5 个金句，与 markdown 原文逐字对比完全一致
- [ ] 未编造原文中不存在的观点或数据
- [ ] 原文中的"通常""可能"等限定词未被放大
- [ ] 原文中的具体数字（如"五棒""50%"）未被篡改

---

## 十一、已有章节参考

已完成的章节可作为模板参考：

| 章节 | 文件路径 | 内容 |
|------|----------|------|
| 第21章 | `价格行为-方方土/al-brooks-ch21/index.html` | 尖峰和通道趋势 |

**第21章模块结构**：
1. 核心定义 — 8 个可展开概念卡片
2. 尖峰本质 — 四位一体可视化 + 图表分析
3. 通道交易 — 规则卡片 + 50%概率理论
4. 形态变种 — 6种变种 + 对比表格
5. 测量运动 — 计算器 + 目标位理论
6. 总结自测 — 公式总结 + 10道测验题

---

## 十二、执行步骤

### 第一步：知识准备（必须先做）
1. **通读 Al Brooks 全书**：理解价格行为学的完整体系
2. **建立概念框架**：掌握趋势、突破、回调、通道、交易区间等核心概念的关系
3. **理解机构行为**：了解大机构如何在市场中操作
4. **熟悉交易心理**：理解恐惧、贪婪、止损触发等心理因素
5. **验证自身理解**：能解释每个概念背后的逻辑，而不仅仅是记住定义

### 第二步：内容分析（最重要）
1. 在 markdown 中定位章节起止行号
2. **逐句阅读**，提取所有概念、规则、图表
3. **标记金句**：原文中每一句有实战价值的句子，记录行号，标记为"必须原文保留"
4. 按主题分组，设计 5-7 个教学模块
5. 为每个模块规划卡片数量和类型
6. **统计原文覆盖率**：确保章节中至少 70% 的核心句子都被纳入（原文引用或解读中提及）

### 第三步：图片验证
1. 列出章节中所有 `![](images/xxx.jpg)` 引用
2. 用 `ls` 验证每个图片文件存在
3. 记录每个图片对应的图表编号和标题

### 第四步：HTML 骨架
1. DOCTYPE + head（meta, title）
2. 完整 CSS（变量 + 所有组件样式）
3. 导航栏 + Hero
4. 6 个空 stage 框架

### 第五步：内容填充
1. 按模块逐个填充卡片
2. 模块一：可展开概念卡片
3. 模块二-五：理论 + 图表 + 规则
4. 模块六：总结 + 测验

### 第六步：JavaScript
1. Lightbox
2. 可展开卡片
3. 导航高亮
4. 计算器
5. 测验引擎

### 第七步：验证
1. 用 `ls` 确认所有图片存在
2. 用浏览器打开验证
3. 检查所有交互功能
4. 检查响应式布局

### 第八步：原文忠实度验证（必须做）
1. 随机抽取 5 个金句，用 Grep 在 markdown 原文中搜索
2. 逐字对比 HTML 中的引用与原文是否完全一致
3. 检查是否有编造的观点（原文中不存在的内容）
4. 确认原文的限定词（通常、可能、也许）未被放大
5. 确认原文的具体数字未被篡改
