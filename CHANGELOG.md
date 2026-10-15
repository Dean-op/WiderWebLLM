# Changelog

## [3.2] - 2026-10-15

- 修复现代 ChatGPT 登录态使用 Tailwind v4 动态 CSS 变量（`--thread-content-max-width` / `max-w-(--thread-content-max-width)`）导致未生效的问题。
- 在 `:root` 与核心容器上全局覆盖 `--thread-content-max-width` 等变量，并针对新版类名进行通配。
- 增加 `@run-at document-start` 与原生 `<style>` 回退注入，保证样式尽早渲染。
- 去除选择器中对 `main` 父容器标签的严格限制，增强跨版本鲁棒性。

## [3.1] - 2026-10-15

- 修复 ChatGPT 登录状态下脚本失效的问题。
- 移除对特定语言 `aria-label`（如英文 `Conversation`、`Response actions`）的选择器依赖，跨语言（中文、英文等）完全兼容。
- 适配 ChatGPT 登录态的 `<article>` 会话组件结构，覆盖 Tailwind `max-w-3xl` 等宽度限制。
- 适配 ChatGPT 底部输入框（Composer），使其与对话内容等宽对齐并居中。
- 完善超宽屏与移动端对 ChatGPT 登录界面的响应式适配。

## [3.0] - 2026-10-15

- 新增 ChatGPT 网页版适配。
- 新增腾讯元宝网页版适配。
- 加宽 Gemini 实际 Markdown 回复正文，而不只是外层容器。
- 覆盖 Gemini 新版正文默认的 `708px` 最大宽度限制。
- 加宽 ChatGPT 回复中的段落、标题、列表、代码块和表格。
- 加宽腾讯元宝 AI 回复内容和输入区域。
- 增加超宽屏和移动端适配，避免横向滚动。
- 统一用户脚本的站点匹配规则。

## [2.6] - 2026-10-15

- 修复 Gemini 新版页面结构导致脚本失效的问题。
- 加宽 Gemini 实际返回内容正文。
- 覆盖 Markdown 正文的 `708px` 宽度限制。

## [2.2]

- 初始版本，适配 Gemini 旧版页面结构。
