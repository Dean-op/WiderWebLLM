# WiderWebLLM

Widen the chat column and input box on web AI interfaces to 92% of the viewport using pure CSS.

[English](#widerwebllm) | [中文](#中文)

---

## Install

Requires [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).

- **GreasyFork (auto-update):** [Install Wider Gemini](https://greasyfork.org/scripts/552886-wider-gemini)
- **Manual:** Copy [wider-gemini.user.js](wider-gemini.user.js) into a new userscript and save.

Hard-refresh (`Ctrl + F5`) any supported page after installing.

## Supported Sites

| Platform | Domains | Coverage |
| :--- | :--- | :--- |
| **Gemini** | `gemini.google.com` | Logged-in & guest, Markdown body, compact tables |
| **ChatGPT** | `chatgpt.com`, `chat.openai.com` | Logged-in (Tailwind v4) & guest/incognito (`#web-mobile-root`) |
| **DeepSeek** | `chat.deepseek.com` | Conversation stream, `.ds-markdown`, composer |
| **Grok** | `grok.com`, `x.com/i/grok` | Standalone site & X embedded view |
| **Qwen** | `chat.qwen.ai`, `chat.qwenlm.ai`, `qianwen.com`, `tongyi.aliyun.com`, `tongyi.com` | International & domestic editions |
| **Yuanbao** | `yuanbao.tencent.com` | AI bubbles & input area |

## Behavior

- **Desktop:** `92%` width, capped at `1800px` (`2000px` on `>= 2560px` screens).
- **Mobile (`<= 600px`):** `96%` width to prevent horizontal overflow.
- **User prompts:** Capped at `min(70%–75%, 1200px)` so your own messages stay compact while AI replies, code blocks, and tables expand.
- **Pure CSS:** Injected at `@run-at document-start` via `GM_addStyle` with no timers, DOM observers, or network requests.

## Troubleshooting

- **Not taking effect:** Confirm you are on `v3.7+`, the script is enabled, and reload with `Ctrl + F5`.
- **Incognito / Private windows:** Enable **Allow in Incognito** for Tampermonkey in your browser's extension settings (`chrome://extensions/` or `edge://extensions/`).
- **Site layout changed:** Open an issue at https://github.com/Dean-op/WiderWebLLM/issues and include the affected URL.

---

# 中文

纯 CSS 油猴脚本，将主流网页版 AI 的对话区与输入框拓宽至视口宽度的 92%。

## 安装

需先安装 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)。

- **GreasyFork（推荐，自动更新）：** [安装脚本](https://greasyfork.org/scripts/552886-wider-gemini)
- **手动安装：** 复制 [wider-gemini.user.js](wider-gemini.user.js) 内容，新建脚本粘贴保存。

安装后按 `Ctrl + F5` 刷新对应网页即可生效。

## 支持站点

| 平台 | 匹配域名 | 适配范围 |
| :--- | :--- | :--- |
| **Gemini** | `gemini.google.com` | 登录态与访客态、正文、新版表格 |
| **ChatGPT** | `chatgpt.com`、`chat.openai.com` | 登录态（Tailwind v4）与未登录/无痕态（`#web-mobile-root`） |
| **DeepSeek** | `chat.deepseek.com` | 对话流、`.ds-markdown`、输入框 |
| **Grok** | `grok.com`、`x.com/i/grok` | 独立站与 X 内嵌页 |
| **通义千问 (Qwen)** | `chat.qwen.ai`、`chat.qwenlm.ai`、`qianwen.com`、`tongyi.aliyun.com`、`tongyi.com` | 国际版与国内版 |
| **腾讯元宝** | `yuanbao.tencent.com` | AI 回复与输入区 |

## 宽度策略

- **常规桌面：** 宽度 `92%`，上限 `1800px`（`>= 2560px` 超宽屏上限 `2000px`）。
- **窄屏 / 移动端（`<= 600px`）：** 宽度 `96%`，避免横向滚动。
- **用户提问气泡：** 上限 `min(70%–75%, 1200px)`，AI 回复、代码块和表格全宽展开。
- **纯 CSS 注入：** 在 `@run-at document-start` 注入静态样式，无定时器、无 DOM 监听、无网络请求。

## 常见问题

- **没有生效：** 确认脚本为 `v3.7+` 且已启用，按 `Ctrl + F5` 强制刷新。
- **无痕窗口无效：** 在扩展管理页（`chrome://extensions/` 或 `edge://extensions/`）为 Tampermonkey 开启「在无痕模式下允许」。
- **页面改版导致失效：** 请在 https://github.com/Dean-op/WiderWebLLM/issues 提交 Issue，会尽快适配。

---

[MIT License](LICENSE) · [Changelog](CHANGELOG.md)
