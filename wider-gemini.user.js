// ==UserScript==
// @name         Wider Gemini
// @name:zh-CN   加宽 Gemini
// @namespace    http://tampermonkey.net/
// @version      3.4
// @description  Widen the content area on Gemini, ChatGPT, Yuanbao, Grok and DeepSeek
// @description:zh-CN  加宽 Gemini、ChatGPT、腾讯元宝、Grok 和 DeepSeek 网页版的显示内容
// @author       dean
// @match        https://gemini.google.com/*
// @match        https://chatgpt.com/*
// @match        https://chat.openai.com/*
// @match        https://yuanbao.tencent.com/*
// @match        https://grok.com/*
// @match        https://x.com/i/grok*
// @match        https://chat.deepseek.com/*
// @run-at       document-start
// @grant        GM_addStyle
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/552886/Wider%20Gemini.user.js
// @updateURL https://update.greasyfork.org/scripts/552886/Wider%20Gemini.meta.js
// ==/UserScript==

(function() {
    'use strict';

    const CONFIG = {
        width: '92%',
        max: '1800px',
        ultraWideMax: '2000px',
        promptMax: '1200px'
    };

    const customCSS = `
        /* ------------------------------
         * Gemini
         * ------------------------------ */
        mat-sidenav-content {
            width: ${CONFIG.width} !important;
            max-width: ${CONFIG.max} !important;
            margin-inline: auto !important;
        }

        .input-area-container,
        .bottom-bar-container {
            width: ${CONFIG.width} !important;
            max-width: ${CONFIG.max} !important;
            box-sizing: border-box !important;
            margin-inline: auto !important;
        }

        input-container input-area-v2 {
            width: 100% !important;
        }

        .conversation-container {
            width: 100% !important;
            max-width: ${CONFIG.max} !important;
            margin-inline: auto !important;
        }

        .conversation-container > user-query {
            width: 100% !important;
            max-width: 100% !important;
            margin-inline: 0 !important;
        }

        /* Gemini caps direct Markdown blocks at 708px. Widen the actual answer text. */
        .conversation-container model-response .md-content > :not(#_) {
            width: ${CONFIG.width} !important;
            max-width: ${CONFIG.max} !important;
            box-sizing: border-box !important;
            margin-inline: auto !important;
        }

        .conversation-container model-response .response-footer,
        .conversation-container model-response .response-container-footer {
            width: ${CONFIG.width} !important;
            max-width: ${CONFIG.max} !important;
            margin-inline: auto !important;
        }

        .conversation-container .user-query-bubble-with-background:not(.edit-mode) {
            max-width: min(70%, ${CONFIG.promptMax}) !important;
        }

        /* ------------------------------
         * ChatGPT (支持新版 Tailwind v4 动态变量与各种容器布局)
         * ------------------------------ */
        :root,
        body,
        #__next,
        .composer-parent {
            --thread-content-max-width: ${CONFIG.max} !important;
            --thread-max-width: ${CONFIG.max} !important;
            --composer-max-width: ${CONFIG.max} !important;
            --conversation-width: ${CONFIG.max} !important;
        }

        /* 覆盖现代 ChatGPT 的核心宽度约束容器（同时包含对话列表与底部输入框） */
        [class*="--thread-content-max-width"],
        [class*="--thread-max-width"],
        .max-w-\\(--thread-content-max-width\\),
        .max-w-\\(--thread-max-width\\),
        .max-w-\\[var\\(--thread-content-max-width\\)\\] {
            width: ${CONFIG.width} !important;
            max-width: ${CONFIG.max} !important;
            margin-inline: auto !important;
            box-sizing: border-box !important;
        }

        /* 覆盖各种历史/备用 Tailwind 宽度类 */
        [class*="max-w-3xl"],
        [class*="max-w-4xl"],
        [class*="max-w-2xl"],
        [class*="max-w-5xl"],
        [class*="max-w-xl"],
        [class*="max-w-[48rem]"],
        [class*="max-w-[40rem]"],
        [class*="xl:max-w-"],
        [class*="lg:max-w-"],
        [class*="md:max-w-"] {
            max-width: ${CONFIG.max} !important;
            width: 100% !important;
        }

        /* 会话轮次元素 */
        main article,
        main [data-testid^="conversation-turn-"],
        [data-testid^="conversation-turn-"],
        article:has([data-message-author-role]),
        main ol > li {
            width: 100% !important;
            max-width: 100% !important;
            margin-inline: auto !important;
            box-sizing: border-box !important;
        }

        main article > div,
        main article .text-base,
        main [data-testid^="conversation-turn-"] > div,
        main [data-testid^="conversation-turn-"] .text-base,
        [data-testid^="conversation-turn-"] .text-base {
            max-width: 100% !important;
            width: 100% !important;
            box-sizing: border-box !important;
        }

        /* AI 回复正文与 Markdown 块 */
        [data-message-author-role="assistant"],
        [data-message-author-role="assistant"] .markdown,
        article:has([data-message-author-role="assistant"]) .markdown,
        .markdown {
            width: 100% !important;
            max-width: 100% !important;
        }

        [data-message-author-role="assistant"] :is(p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, pre, table),
        article:has([data-message-author-role="assistant"]) .markdown :is(p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, pre, table),
        .markdown :is(p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, pre, table) {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
        }

        /* 用户提问气泡宽度限制 */
        [data-message-author-role="user"] {
            max-width: min(75%, ${CONFIG.promptMax}) !important;
        }

        /* 底部输入框容器 */
        form:has(#prompt-textarea),
        main form,
        .composer-parent form {
            width: ${CONFIG.width} !important;
            max-width: ${CONFIG.max} !important;
            margin-inline: auto !important;
            box-sizing: border-box !important;
        }

        form:has(#prompt-textarea) > div,
        main form > div {
            width: 100% !important;
            max-width: 100% !important;
        }

        /* ------------------------------
         * Tencent Yuanbao
         * ------------------------------ */
        .agent-dialogue,
        .agent-dialogue__content-wrapper,
        .agent-dialogue__content,
        .agent-dialogue__content--common,
        .agent-dialogue__content--common__content,
        #chat-content {
            width: 100% !important;
            max-width: none !important;
        }

        .agent-dialogue__content--common__homepage,
        .agent-chat__conv--agent-homepage-v2,
        .agent-chat__list__content-wrapper,
        .agent-dialogue__content--common__input__content,
        .agent-dialogue__content--common__input-box {
            width: ${CONFIG.width} !important;
            max-width: ${CONFIG.max} !important;
            box-sizing: border-box !important;
            margin-inline: auto !important;
        }

        .agent-chat__list__content {
            width: 100% !important;
            max-width: none !important;
        }

        .agent-chat__list__item,
        .agent-chat__list__item--ai,
        .agent-chat__list__item__content,
        .agent-chat__bubble--ai,
        .agent-chat__bubble--ai .agent-chat__bubble__content,
        .agent-chat__bubble--ai .agent-chat__bubble__content > .hyc-component-text {
            width: 100% !important;
            max-width: ${CONFIG.max} !important;
            box-sizing: border-box !important;
        }

        /* ------------------------------
         * Grok (grok.com & x.com/i/grok)
         * ------------------------------ */
        :root {
            --content-max-width: ${CONFIG.max} !important;
        }

        /* 主内容与消息气泡宽度 */
        [class*="--content-max-width"],
        .max-w-\\[--content-max-width\\] {
            width: ${CONFIG.width} !important;
            max-width: ${CONFIG.max} !important;
            margin-inline: auto !important;
            box-sizing: border-box !important;
        }

        /* 对话流居中容器与消息条目 (排除右侧固定控件) */
        .flex.flex-col.items-center > div:not([class*="absolute"]) {
            width: 100% !important;
            max-width: ${CONFIG.max} !important;
            box-sizing: border-box !important;
        }

        /* 外层主框架解除限制 */
        .breakout,
        .relative.flex.h-full.flex-col.items-center {
            width: 100% !important;
            max-width: none !important;
        }

        /* 输入区域与输入框 */
        div:has(> textarea),
        div:has(> [contenteditable="true"]) {
            max-width: 100% !important;
        }

        /* ------------------------------
         * DeepSeek (chat.deepseek.com)
         * ------------------------------ */
        :root,
        :host,
        body,
        #root {
            --dsh-chat-content-width: ${CONFIG.max} !important;
            --dsh-composer-card-max-width: ${CONFIG.max} !important;
            --message-list-max-width: ${CONFIG.max} !important;
        }

        /* 主对话容器与消息列表宽度 */
        [class*="chat-container"],
        [class*="message-container"],
        [class*="chat-content"],
        [class*="mainContent"],
        [class*="fbbswY_root"],
        [class*="wSkVaW_root"],
        [style*="--dsh-chat-content-width"],
        [style*="--message-list-max-width"] {
            width: ${CONFIG.width} !important;
            max-width: ${CONFIG.max} !important;
            margin-inline: auto !important;
            box-sizing: border-box !important;
        }

        /* Markdown 回复正文、代码块与表格 */
        .ds-markdown,
        .ds-markdown--block,
        .ds-markdown-paragraph,
        div[class*="ds-markdown"] {
            width: 100% !important;
            max-width: 100% !important;
        }

        .ds-markdown :is(p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, pre, table),
        .ds-markdown--block :is(p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, pre, table) {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
        }

        /* 底部输入框容器与输入区域 */
        [class*="chat-input"],
        [class*="input-container"],
        [class*="composer-card"],
        div:has(> textarea[placeholder]) {
            width: ${CONFIG.width} !important;
            max-width: ${CONFIG.max} !important;
            margin-inline: auto !important;
            box-sizing: border-box !important;
        }

        div:has(> textarea[placeholder]) textarea {
            width: 100% !important;
            box-sizing: border-box !important;
        }

        @media (min-width: 2560px) {
            :root,
            body,
            #__next,
            .composer-parent {
                --thread-content-max-width: ${CONFIG.ultraWideMax} !important;
                --thread-max-width: ${CONFIG.ultraWideMax} !important;
                --composer-max-width: ${CONFIG.ultraWideMax} !important;
                --conversation-width: ${CONFIG.ultraWideMax} !important;
                --content-max-width: ${CONFIG.ultraWideMax} !important;
                --dsh-chat-content-width: ${CONFIG.ultraWideMax} !important;
                --dsh-composer-card-max-width: ${CONFIG.ultraWideMax} !important;
                --message-list-max-width: ${CONFIG.ultraWideMax} !important;
            }

            mat-sidenav-content,
            .input-area-container,
            .bottom-bar-container,
            .conversation-container,
            .conversation-container model-response .md-content > :not(#_),
            .conversation-container model-response .response-footer,
            .conversation-container model-response .response-container-footer,
            [class*="--thread-content-max-width"],
            [class*="--thread-max-width"],
            .max-w-\\(--thread-content-max-width\\),
            .max-w-\\(--thread-max-width\\),
            main article,
            main [data-testid^="conversation-turn-"],
            [data-testid^="conversation-turn-"],
            article:has([data-message-author-role]),
            main ol > li,
            main form,
            form:has(#prompt-textarea),
            .composer-parent form,
            [class*="--content-max-width"],
            .max-w-\\[--content-max-width\\],
            .flex.flex-col.items-center > div:not([class*="absolute"]),
            [class*="chat-container"],
            [class*="message-container"],
            [class*="chat-content"],
            [class*="mainContent"],
            [class*="chat-input"],
            [class*="input-container"],
            [class*="composer-card"],
            [style*="--dsh-chat-content-width"],
            [style*="--message-list-max-width"],
            div:has(> textarea[placeholder]),
            .agent-dialogue__content--common__homepage,
            .agent-chat__conv--agent-homepage-v2,
            .agent-chat__list__content-wrapper,
            .agent-chat__list__content,
            .agent-dialogue__content--common__input__content,
            .agent-dialogue__content--common__input-box,
            .agent-chat__list__item,
            .agent-chat__list__item--ai,
            .agent-chat__list__item__content,
            .agent-chat__bubble--ai,
            .agent-chat__bubble--ai .agent-chat__bubble__content,
            .agent-chat__bubble--ai .agent-chat__bubble__content > .hyc-component-text {
                max-width: ${CONFIG.ultraWideMax} !important;
            }
        }

        @media (max-width: 600px) {
            mat-sidenav-content,
            .input-area-container,
            .bottom-bar-container,
            [class*="--thread-content-max-width"],
            [class*="--thread-max-width"],
            form:has(#prompt-textarea),
            main form,
            [class*="--content-max-width"],
            .max-w-\\[--content-max-width\\],
            .flex.flex-col.items-center > div:not([class*="absolute"]),
            [class*="chat-container"],
            [class*="message-container"],
            [class*="chat-content"],
            [class*="mainContent"],
            [class*="chat-input"],
            [class*="input-container"],
            [class*="composer-card"],
            [style*="--dsh-chat-content-width"],
            [style*="--message-list-max-width"],
            div:has(> textarea[placeholder]),
            .agent-dialogue__content--common__homepage,
            .agent-chat__conv--agent-homepage-v2,
            .agent-chat__list__content-wrapper,
            .agent-chat__list__content,
            .agent-dialogue__content--common__input__content,
            .agent-dialogue__content--common__input-box {
                width: 96% !important;
            }

            main section,
            main article,
            [data-testid^="conversation-turn-"] {
                padding-inline: 12px !important;
            }
        }
    `;

    try {
        if (typeof GM_addStyle === 'function') {
            GM_addStyle(customCSS);
        } else {
            const style = document.createElement('style');
            style.textContent = customCSS;
            (document.head || document.documentElement).appendChild(style);
        }
        console.log('Wider Gemini v3.4 applied.');
    } catch (e) {
        console.error('Wider Gemini script error:', e);
    }
})();



