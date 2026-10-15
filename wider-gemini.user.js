// ==UserScript==
// @name         Wider Gemini
// @name:zh-CN   加宽 Gemini
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Widen the content area on Gemini, ChatGPT and Yuanbao
// @description:zh-CN  加宽 Gemini、ChatGPT 和腾讯元宝网页版的显示内容
// @author       dean
// @match        https://gemini.google.com/*
// @match        https://chatgpt.com/*
// @match        https://chat.openai.com/*
// @match        https://yuanbao.tencent.com/*
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
         * ChatGPT
         * ------------------------------ */
        main [aria-label^="Conversation"] > section {
            padding-inline: 24px !important;
            box-sizing: border-box !important;
        }

        main [aria-label^="Conversation"] ol[aria-label="Conversation"],
        main [aria-label^="Conversation"] ol[aria-label="Conversation"] > li {
            width: 100% !important;
            max-width: ${CONFIG.max} !important;
            margin-inline: auto !important;
        }

        /* Current ChatGPT uses Response actions; older builds expose author data. */
        main [aria-label^="Conversation"] ol[aria-label="Conversation"] > li:has([aria-label="Response actions"]),
        main [aria-label^="Conversation"] [data-message-author-role="assistant"] {
            width: 100% !important;
            max-width: ${CONFIG.max} !important;
            margin-inline: auto !important;
        }

        main [aria-label^="Conversation"] ol[aria-label="Conversation"] > li:has([aria-label="Response actions"]) :is(p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, pre, table),
        main [aria-label^="Conversation"] [data-message-author-role="assistant"] :is(p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, pre, table) {
            width: 100% !important;
            max-width: ${CONFIG.max} !important;
            box-sizing: border-box !important;
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

        @media (min-width: 2560px) {
            mat-sidenav-content,
            .input-area-container,
            .bottom-bar-container,
            .conversation-container,
            .conversation-container model-response .md-content > :not(#_),
            .conversation-container model-response .response-footer,
            .conversation-container model-response .response-container-footer,
            main [aria-label^="Conversation"] ol[aria-label="Conversation"],
            main [aria-label^="Conversation"] ol[aria-label="Conversation"] > li,
            main [aria-label^="Conversation"] ol[aria-label="Conversation"] > li:has([aria-label="Response actions"]),
            main [aria-label^="Conversation"] [data-message-author-role="assistant"],
            main [aria-label^="Conversation"] ol[aria-label="Conversation"] > li:has([aria-label="Response actions"]) :is(p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, pre, table),
            main [aria-label^="Conversation"] [data-message-author-role="assistant"] :is(p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, pre, table),
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
            .agent-dialogue__content--common__homepage,
            .agent-chat__conv--agent-homepage-v2,
            .agent-chat__list__content-wrapper,
            .agent-chat__list__content,
            .agent-dialogue__content--common__input__content,
            .agent-dialogue__content--common__input-box {
                width: 96% !important;
            }

            main [aria-label^="Conversation"] > section {
                padding-inline: 12px !important;
            }
        }
    `;

    try {
        GM_addStyle(customCSS);
        console.log('Wider Gemini v3.0 applied.');
    } catch (e) {
        console.error('Wider Gemini script error:', e);
    }
})();



