# Wider Gemini

一个用于加宽网页版 AI 对话内容区域的 Tampermonkey 用户脚本。

## 支持网站

- Gemini：`gemini.google.com`
- ChatGPT：`chatgpt.com`、`chat.openai.com`
- 腾讯元宝：`yuanbao.tencent.com`
- Grok：`grok.com`、`x.com/i/grok`
- DeepSeek：`chat.deepseek.com`

## 功能

- 加宽 Gemini 实际 Markdown 回复正文，覆盖新版默认的 `708px` 宽度限制。
- 加宽 ChatGPT 助手回复中的段落、标题、列表、代码块、表格以及底部输入区域（全面支持登录态与未登录态及多语言界面）。
- 加宽腾讯元宝 AI 回复内容和输入区域。
- 加宽 Grok 聊天界面、消息气泡与输入框，覆盖 `--content-max-width` 限制。
- 加宽 DeepSeek 对话列表、`.ds-markdown` 回复正文与输入框，覆盖 `--dsh-chat-content-width` 等变量限制。
- 普通桌面屏幕使用约 `92%` 可用宽度。
- `2560px` 以上屏幕最大宽度为 `2000px`。
- 移动端自动收窄，避免横向滚动。
- 纯 CSS 注入，无额外依赖、无数据收集、无 API 调用。

## 安装

### Tampermonkey

1. 安装 [Tampermonkey](https://www.tampermonkey.net/)。
2. 打开 `wider-gemini.user.js`，复制全部内容。
3. 在 Tampermonkey 中新建脚本，粘贴并保存。
4. 打开或刷新上述 AI 网站。


## 项目结构

```text
WiderWebLLM/
├── wider-gemini.user.js  # 用户脚本源码
├── README.md             # 项目说明
├── CHANGELOG.md          # 更新日志
├── LICENSE               # MIT License
└── .gitignore
```

## 许可证

[MIT](LICENSE)
