---
timezone: UTC+8
---

# shell

**GitHub ID:** emptyshell424

**Telegram:** @shell424

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->
<!DOCTYPE html>

<html lang="zh-CN">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>简约 HTML 笔记模版</title>

<style>

/\* 1. 基础重置与全局变量 \*/

:root {

\--bg-color: #ffffff;

\--text-main: #2c3e50;

\--text-muted: #7f8c8d;

\--accent-color: #3498db; /\* 唯一的主题色 \*/

\--code-bg: #f8f9fa;

\--border-color: #eaecef;

}

body {

font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;

color: var(--text-main);

background-color: var(--bg-color);

line-height: 1.7;

padding: 2rem 1rem;

margin: 0;

}

/\* 2. 布局：限制最大宽度，产生呼吸感 \*/

.note-container {

max-width: 760px;

margin: 0 auto;

}

/\* 3. 标题排版：靠字重和间距拉开层次 \*/

h1, h2, h3 {

font-weight: 600;

color: #1a252f;

margin-top: 2rem;

margin-bottom: 1rem;

}

h1 { font-size: 2.2rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; }

h2 { font-size: 1.6rem; margin-top: 2.5rem; }

h3 { font-size: 1.2rem; }

p {

margin-top: 0;

margin-bottom: 1.2rem;

}

/\* 4. 链接与强调 \*/

a {

color: var(--accent-color);

text-decoration: none;

}

a:hover {

text-decoration: underline;

}

strong {

color: #000;

font-weight: 600;

}

/\* 5. 列表样式 \*/

ul, ol {

padding-left: 1.5rem;

margin-bottom: 1.2rem;

}

li {

margin-bottom: 0.4rem;

}

/\* 6. 高级感细节：高亮提示框 (Callout) \*/

blockquote, .callout {

margin: 1.5rem 0;

padding: 0.8rem 1.2rem;

background-color: var(--code-bg);

border-left: 4px solid var(--accent-color);

color: #555;

}

/\* 7. 代码块样式 \*/

code {

font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;

font-size: 0.9em;

background-color: var(--code-bg);

padding: 0.2rem 0.4rem;

border-radius: 4px;

}

pre code {

display: block;

padding: 1rem;

overflow-x: auto;

border: 1px solid var(--border-color);

}

/\* Meta 信息（如日期、标签） \*/

.meta {

font-size: 0.9rem;

color: var(--text-muted);

margin-bottom: 2rem;

}

</style>

</head>

<body>

<div class="note-container">

<header>

<h1>如何构建高效的知识管理系统</h1>

<div class="meta">发布时间: 2026-05-19 | 分类: 生产力</div>

</header>

<main>

<p>构建知识管理系统的目的不是为了“收藏”，而是为了“提取”和“输出”。很多人陷入了<strong>收集癖</strong>的误区，攒了无数文章却从未真正消化。</p>

<h2>一、核心原则</h2>

<p>一个好的笔记系统应该具备以下三个特点：</p>

<ul>

<li><strong>原子化：</strong> 一篇笔记只记录一个核心概念。</li>

<li><strong>网状化：</strong> 笔记之间存在逻辑链接，而不是孤立的文件夹。</li>

<li><strong>可检索：</strong> 能够通过关键词或标签在 3 秒内找到。</li>

</ul>

<div class="callout">

<strong>核心思考：</strong> 你记录这篇笔记时，预期的未来使用场景是什么？如果没有场景，就不要记录。

</div>

<h2>二、技术实现代码片段</h2>

<p>例如，我们在处理 Markdown 链接时，可以使用简单的正则表达式进行匹配：</p>

<pre><code>const markdownLinkRegex = /\\\[(\[^\\\]\]+)\\\]\\((\[^)\]+)\\)/g;

const sampleText = "欢迎访问 \[我的博客\]([https://example.com](https://example.com))";

const match = markdownLinkRegex.exec(sampleText);

console.log`链接文本: ${match[1]}, URL: ${match[2]}`);</code></pre>

<h2>三、总结</h2>

<p>保持系统的简单。工具只是辅助，真正的知识内化发生在你<a href="#">公开输出</a>或者实践的那一刻。</p>

</main>

</div>

</body>

</html>
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
