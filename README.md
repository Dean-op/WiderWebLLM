# WiderWebLLM (Wider Gemini)

<p align="left">
  <img src="https://img.shields.io/badge/version-3.4-blue.svg" alt="version">
  <img src="https://img.shields.io/badge/Tampermonkey-supported-green.svg" alt="tampermonkey">
  <img src="https://img.shields.io/badge/license-MIT-orange.svg" alt="license">
  <a href="https://greasyfork.org/scripts/552886-wider-gemini"><img src="https://img.shields.io/badge/GreasyFork-552886-red.svg" alt="greasyfork"></a>
</p>

一个轻量、高效的浏览器用户脚本（UserScript），专为宽屏、超宽屏（2K / 4K / 带鱼屏）用户打造。一站式破除主流网页版大语言模型（LLM）对话区域的狭窄限制，充分利用屏幕横向空间，带来极致的代码、表格与长文本阅读体验。

---

## 🌟 支持平台与适配特性

| AI 平台 | 匹配网址 | 对话正文加宽 | 底部输入框加宽 | 登录态/多语言兼容 | 核心适配机制 |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Google Gemini** | `gemini.google.com` | ✅ | ✅ | ✅ 全语言 | 穿透覆盖官方新版正文默认的 `708px` 限制 |
| **OpenAI ChatGPT** | `chatgpt.com`<br>`chat.openai.com` | ✅ | ✅ | ✅ 登录态 + 访客态 | 覆写 Tailwind v4 `--thread-content-max-width` 动态变量 |
| **腾讯元宝** | `yuanbao.tencent.com` | ✅ | ✅ | ✅ 全语言 | 覆盖 `.agent-chat__bubble--ai` 及输入组件 |
| **xAI Grok** | `grok.com`<br>`x.com/i/grok` | ✅ | ✅ | ✅ 独立站 + X内嵌 | 覆写 `--content-max-width` 变量并解除居中流约束 |
| **DeepSeek** | `chat.deepseek.com` | ✅ | ✅ | ✅ 全语言 | 覆写 `--dsh-chat-content-width` 及 `.ds-markdown` 容器 |

---

## ✨ 核心特性

- 🖥️ **充分利用宽屏视野**：普通桌面屏幕默认使用可用宽度的约 **92%**（最大上限 `1800px`），大幅减少两侧大面积空白。
- 📊 **代码与表格无损展开**：长代码块无需频繁水平拉动，复杂 Markdown 表格完整展开，极大提升生产力与排版可读性。
- 💬 **人性化提问气泡约束**：用户自身提问气泡自动限制在 `min(75%, 1200px)` 内，保持对话层次分明，避免简短提问被不自然拉伸。
- 🚀 **极速渲染，零性能损耗**：
  - 声明 `@run-at document-start`，在页面 DOM 初始构建阶段即刻注入样式，有效防止界面闪烁（FOUC）。
  - **纯 CSS 机制**：零外部依赖、无复杂 DOM 监听轮询，对网页原生交互零性能开销。
  - **隐私安全**：无任何网络 API 调用、无数据埋点与隐私收集。
- 📱 **多端智能响应式**：
  - **超宽屏（≥ 2560px）**：最大宽度自动上浮至 `2000px`。
  - **小屏 / 移动端（≤ 600px）**：自动收窄内边距并将宽度设为 `96%`，坚决避免水平溢出滚动条。

---

## 📦 安装方式

### 方式一：GreasyFork 一键安装（推荐）

1. 浏览器安装 [Tampermonkey（油猴）](https://www.tampermonkey.net/) 或 Violentmonkey（暴力猴）扩展。
2. 前往 GreasyFork 脚本主页：👉 [Wider Gemini (GreasyFork)](https://greasyfork.org/scripts/552886-wider-gemini)
3. 点击绿色 **“安装此脚本”** 按钮即可，后续可享受自动检查更新。

### 方式二：手动安装

1. 打开 [wider-gemini.user.js](wider-gemini.user.js)，复制全部代码。
2. 在 Tampermonkey 扩展图标中选择 **“添加新脚本”**。
3. 清空编辑器默认模板，粘贴刚才复制的代码并保存（`Ctrl + S`）。
4. 打开或刷新任意受支持的 AI 网页即可生效。

---

## ⚙️ 自定义配置

如果你希望调整显示宽度或最大尺寸，可以在脚本开头的 `CONFIG` 对象中随心调节：

```javascript
const CONFIG = {
    width: '92%',          // 默认内容区占屏幕宽度的百分比
    max: '1800px',         // 普通桌面屏幕下的最大宽度限制
    ultraWideMax: '2000px',// 2560px 及以上超宽屏下的最大宽度限制
    promptMax: '1200px'    // 用户提问气泡的最大宽度上限
};
```

修改后保存脚本并刷新对应 AI 页面即可生效。

---

## ❓ 常见问题排查 (FAQ)

<details>
<summary><b>1. 脚本安装后没有任何加宽效果？</b></summary>

- **检查脚本版本**：确保已更新至 **v3.4** 或最新版本。
- **确认扩展状态**：确认 Tampermonkey 处于启用状态，并且该网页下显示脚本处于开启（数字角标）。
- **硬刷新缓存**：部分单页应用（SPA）会缓存样式，请在对应网页按下 **`Ctrl + F5`** 进行强制刷新。
</details>

<details>
<summary><b>2. ChatGPT 登录后失效？</b></summary>

新版 ChatGPT 采用了 Tailwind v4 动态 CSS 变量控制布局，v3.2+ 版本已全面覆盖修复。请确保油猴中的脚本已更新至最新源码。
</details>

<details>
<summary><b>3. 扩展效果失效？</b></summary>

请到 https://github.com/Dean-op/WiderWebLLM 提Issues，会尽快适配更新后的网页
</details>
---

## 📂 项目结构

```text
WiderWebLLM/
├── wider-gemini.user.js  # 用户脚本核心源码
├── README.md             # 项目说明文档
├── CHANGELOG.md          # 详细版本更新日志
├── LICENSE               # MIT 开源许可证
└── .gitignore
```

---

## 📄 许可证

本项目基于 [MIT](LICENSE) 许可证开源。
