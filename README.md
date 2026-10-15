# WiderWebLLM (Wider Gemini)

<p align="left">
  <img src="https://img.shields.io/badge/version-3.6-blue.svg" alt="version">
  <img src="https://img.shields.io/badge/Tampermonkey-supported-green.svg" alt="tampermonkey">
  <img src="https://img.shields.io/badge/license-MIT-orange.svg" alt="license">
  <a href="https://greasyfork.org/scripts/552886-wider-gemini"><img src="https://img.shields.io/badge/GreasyFork-552886-red.svg" alt="greasyfork"></a>
</p>

A Tampermonkey userscript that widens the chat and input area across web AI platforms.

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
| **Qwen (通义千问)** | `chat.qwen.ai`<br>`qianwen.com` | ✅ | ✅ | ✅ Global & Domestic | Overrides `--qianwen-main-area-content-max-width` and expands chat / input wrappers |

---

## ✨ Features

- **Wider Layout**: Uses ~92% width on desktop (max 1800px; 2000px on displays ≥2560px).
- **Readable Code & Tables**: Expands code blocks and Markdown tables without horizontal scrolling.
- **Constrained Prompts**: Caps user query bubbles at `min(75%, 1200px)`.
- **Pure CSS**: Injected at `@run-at document-start` with no layout shifts and zero tracking.
- **Mobile Responsive**: Automatically narrows on screens ≤600px.

---

## 📦 Installation

- **GreasyFork (Recommended)**: Install directly from [GreasyFork](https://greasyfork.org/scripts/552886-wider-gemini) for automatic updates.
- **Manual**: Copy [wider-gemini.user.js](wider-gemini.user.js), paste into a new Tampermonkey script, and save.

---

## ❓ FAQ

<details>
<summary><b>1. Not working?</b></summary>

Ensure v3.6+, verify Tampermonkey is active, and hard refresh with `Ctrl + F5`.
</details>

<details>
<summary><b>2. ChatGPT logged-in issue?</b></summary>

v3.2+ overrides Tailwind v4 CSS variables. Update to the latest version.
</details>

<details>
<summary><b>3. Script failed?</b></summary>

Please submit an issue at https://github.com/Dean-op/WiderWebLLM/issues, and we will adapt to the new webpage structure as soon as possible.
</details>

---

# WiderWebLLM (Wider Gemini) - 中文说明

一个用于加宽主流网页版 AI 对话内容与输入区域的 Tampermonkey 用户脚本。

---

## 🌟 支持平台与特性对比

| AI 平台 | 匹配网址 | 对话正文加宽 | 底部输入框加宽 | 登录态/多语言兼容 | 核心适配机制 |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Google Gemini** | `gemini.google.com` | ✅ | ✅ | ✅ 全语言 | 穿透覆盖官方新版正文默认的 `708px` 限制 |
| **OpenAI ChatGPT** | `chatgpt.com`<br>`chat.openai.com` | ✅ | ✅ | ✅ 登录态 + 访客态 | 覆写 Tailwind v4 `--thread-content-max-width` 动态变量 |
| **腾讯元宝** | `yuanbao.tencent.com` | ✅ | ✅ | ✅ 全语言 | 覆盖 `.agent-chat__bubble--ai` 及输入组件 |
| **xAI Grok** | `grok.com`<br>`x.com/i/grok` | ✅ | ✅ | ✅ 独立站 + X内嵌 | 覆写 `--content-max-width` 变量并解除居中流约束 |
| **DeepSeek** | `chat.deepseek.com` | ✅ | ✅ | ✅ 全语言 | 覆写 `--dsh-chat-content-width` 及 `.ds-markdown` 容器 |
| **通义千问 (Qwen)** | `chat.qwen.ai`<br>`qianwen.com` | ✅ | ✅ | ✅ 国际版 + 国内版 | 覆写 `--qianwen-main-area-content-max-width` 变量，解限 `.qwen-chat-message` 与输入框载体 |

---

## ✨ 核心特性

- **加宽界面**：普通桌面默认使用约 92% 可用宽度（上限 1800px，2560px+ 屏幕上限 2000px）。
- **代码与表格展开**：代码块与 Markdown 表格完整水平展开，减少水平滚动。
- **提问气泡约束**：用户自身提问气泡限制在 `min(75%, 1200px)` 内。
- **纯 CSS 注入**：`@run-at document-start` 消除闪烁，无额外性能开销与数据收集。
- **移动端适配**：600px 以下屏幕自动收窄至 96%，防止横向滚动。

---

## 📦 安装方式

- **GreasyFork（推荐）**：直接在 [GreasyFork](https://greasyfork.org/scripts/552886-wider-gemini) 点击安装，支持自动检查更新。
- **手动安装**：复制 [wider-gemini.user.js](wider-gemini.user.js) 内容，在 Tampermonkey 中新建脚本粘贴并保存。

---

## ❓ 常见问题

<details>
<summary><b>1. 未生效？</b></summary>

确认脚本为 v3.6+，检查 Tampermonkey 是否启用，或按 `Ctrl + F5` 强制刷新。
</details>

<details>
<summary><b>2. ChatGPT 登录态失效？</b></summary>

新版使用 Tailwind v4 动态变量，v3.2+ 已修复，更新脚本即可。
</details>

<details>
<summary><b>3. 脚本效果失效？</b></summary>

请到 https://github.com/Dean-op/WiderWebLLM/issues 添加 Issues，会尽快适配新版网页结构。
</details>

---

## 📄 许可证 / License

[MIT](LICENSE)
