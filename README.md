# WiderWebLLM (Wider Gemini)

<p align="left">
  <img src="https://img.shields.io/badge/version-3.4-blue.svg" alt="version">
  <img src="https://img.shields.io/badge/Tampermonkey-supported-green.svg" alt="tampermonkey">
  <img src="https://img.shields.io/badge/license-MIT-orange.svg" alt="license">
  <a href="https://greasyfork.org/scripts/552886-wider-gemini"><img src="https://img.shields.io/badge/GreasyFork-552886-red.svg" alt="greasyfork"></a>
</p>

A lightweight, zero-overhead browser userscript (Tampermonkey) designed for widescreen and ultrawide (2K / 4K / ultrawide) monitors. Unlocks the narrow conversation width constraints across major web AI platforms to deliver an optimal reading experience for code blocks, tables, and long-form responses.

[English](#widerwebllm-wider-gemini) | [中文说明](#widerwebllm-wider-gemini---中文说明)

---

## 🌟 Supported Platforms

| Platform | Matching URL | Chat Widened | Input Bar Widened | Logged-in / Multi-lang | Core Mechanism |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Google Gemini** | `gemini.google.com` | ✅ | ✅ | ✅ All locales | Bypasses the default `708px` limit on Markdown body |
| **OpenAI ChatGPT** | `chatgpt.com`<br>`chat.openai.com` | ✅ | ✅ | ✅ Guest & Logged-in | Overrides Tailwind v4 `--thread-content-max-width` variable |
| **Tencent Yuanbao** | `yuanbao.tencent.com` | ✅ | ✅ | ✅ All locales | Expands `.agent-chat__bubble--ai` and input wrappers |
| **xAI Grok** | `grok.com`<br>`x.com/i/grok` | ✅ | ✅ | ✅ Standalone + X | Overrides `--content-max-width` and unlocks center stream |
| **DeepSeek** | `chat.deepseek.com` | ✅ | ✅ | ✅ All locales | Overrides `--dsh-chat-content-width` and `.ds-markdown` containers |

---

## ✨ Key Features

- **Widescreen Optimization**: Uses ~92% of available screen width by default (max 1800px) and up to 2000px on ultrawide monitors (≥2560px).
- **Uncramped Code & Tables**: Markdown tables and long code blocks expand horizontally without awkward line wraps or scrollbars.
- **Balanced Prompt Bubbles**: Restricts user prompt bubbles to `min(75%, 1200px)` to preserve conversation hierarchy.
- **Zero Overhead & Pure CSS**: Runs at `@run-at document-start` to eliminate visual flashing (FOUC); zero tracking and zero runtime performance cost.
- **Mobile Responsive**: Automatically contracts to 96% on small viewports (≤600px) to prevent horizontal scrolling.

---

## 📦 Installation

### Method 1: GreasyFork One-Click (Recommended)

1. Install [Tampermonkey](https://www.tampermonkey.net/) or Violentmonkey browser extension.
2. Visit: 👉 [Wider Gemini on GreasyFork](https://greasyfork.org/scripts/552886-wider-gemini).
3. Click **"Install this script"** to enable automatic updates.

### Method 2: Manual Installation

1. Open [wider-gemini.user.js](wider-gemini.user.js) and copy the entire code.
2. In Tampermonkey, select **"Create a new script"**.
3. Clear the default template, paste the code, and press `Ctrl + S` to save.
4. Refresh any supported AI website.

---

## ❓ FAQ

<details>
<summary><b>1. Script not working after installation?</b></summary>

- Verify you are running **v3.4+**.
- Ensure Tampermonkey is enabled and active on the website (extension badge shows active script).
- Perform a hard refresh using **`Ctrl + F5`**.
</details>

<details>
<summary><b>2. ChatGPT not widening when logged in?</b></summary>

Modern ChatGPT uses Tailwind v4 dynamic CSS variables. v3.2+ completely resolves this issue. Ensure your script is updated to the latest version.
</details>

<details>
<summary><b>3. Script failed?</b></summary>

Please submit an issue at https://github.com/Dean-op/WiderWebLLM/issues, and we will adapt to the new webpage structure as soon as possible.
</details>
---

# WiderWebLLM (Wider Gemini) - 中文说明

一个轻量、高效的浏览器用户脚本（UserScript），专为宽屏与超宽屏（2K / 4K / 带鱼屏）用户打造。一站式破除主流网页版大语言模型（LLM）对话区域的狭窄限制，充分利用屏幕横向空间，带来极致的代码、表格与长文本阅读体验。

---

## 🌟 支持平台与特性对比

| AI 平台 | 匹配网址 | 对话正文加宽 | 底部输入框加宽 | 登录态/多语言兼容 | 核心适配机制 |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Google Gemini** | `gemini.google.com` | ✅ | ✅ | ✅ 全语言 | 穿透覆盖官方新版正文默认的 `708px` 限制 |
| **OpenAI ChatGPT** | `chatgpt.com`<br>`chat.openai.com` | ✅ | ✅ | ✅ 登录态 + 访客态 | 覆写 Tailwind v4 `--thread-content-max-width` 动态变量 |
| **腾讯元宝** | `yuanbao.tencent.com` | ✅ | ✅ | ✅ 全语言 | 覆盖 `.agent-chat__bubble--ai` 及输入组件 |
| **xAI Grok** | `grok.com`<br>`x.com/i/grok` | ✅ | ✅ | ✅ 独立站 + X内嵌 | 覆写 `--content-max-width` 变量并解除居中流约束 |
| **DeepSeek** | `chat.deepseek.com` | ✅ | ✅ | ✅ 全语言 | 覆写 `--dsh-chat-content-width` 及 `.ds-markdown` 容器 |

---

## ✨ 核心特性

- **宽屏极致视野**：桌面端默认利用约 92% 屏幕可用宽度（上限 1800px），2560px+ 超宽屏自动上浮至 2000px。
- **代码与表格无损展开**：复杂表格与长代码块完整舒展展开，告别频繁水平滚动与不合理折行。
- **人性化提问气泡约束**：用户自身提问气泡限制在 `min(75%, 1200px)` 内，保持对话层次主次分明。
- **零损耗纯 CSS 注入**：`@run-at document-start` 消除首屏闪烁；纯样式注入，零网络请求与数据收集。
- **移动端自适应**：600px 以下小屏自动收窄至 96%，坚决避免水平横向滚动条。

---

## 📦 安装方式

### 方式一：GreasyFork 一键安装（推荐）

1. 浏览器安装 [Tampermonkey（油猴）](https://www.tampermonkey.net/) 或 Violentmonkey（暴力猴）扩展。
2. 前往 GreasyFork 脚本主页：👉 [Wider Gemini (GreasyFork)](https://greasyfork.org/scripts/552886-wider-gemini)。
3. 点击绿色 **“安装此脚本”** 按钮即可，后续可享受自动更新。

### 方式二：手动安装

1. 打开 [wider-gemini.user.js](wider-gemini.user.js) 复制全部代码。
2. 在 Tampermonkey 中新建脚本，清空默认模板后粘贴并保存（`Ctrl + S`）。
3. 打开或刷新任意受支持的 AI 网页即可生效。

---

## ❓ 常见问题排查 (FAQ)

<details>
<summary><b>1. 脚本安装后没有任何加宽效果？</b></summary>

- **检查版本**：确保脚本已更新至 **v3.4+** 最新版本。
- **确认启用**：确认 Tampermonkey 处于启用状态且该域名下脚本已激活（显示数字角标）。
- **强刷缓存**：在对应网页按下 **`Ctrl + F5`** 强制刷新。
</details>

<details>
<summary><b>2. ChatGPT 登录后失效？</b></summary>

新版 ChatGPT 采用了 Tailwind v4 动态 CSS 变量控制布局，v3.2+ 版本已全面覆盖修复。请确保油猴中的脚本已更新至最新源码。
</details>

<details>
<summary><b>3. 脚本效果失效？</b></summary>

请到 https://github.com/Dean-op/WiderWebLLM/issues 添加Issues，会尽快适配新版网页结构
</details>
---

## 📄 许可证 / License

本项目基于 [MIT](LICENSE) 许可证开源。
