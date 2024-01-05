/**
 * @license
 * Copyright 2023 cbCodeStudio LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {queryAll} from 'lit/decorators/query-all.js';

/**
 * Static Template
 */
const styles = css`
    pre {
        margin: 0;
        padding: 0;
    }
    .terminal {
        border-radius: 5px 5px 0 0;
        position: relative;
    }
    .terminal .top {
        background: #514f51;
        color: #e8e6e8;
        padding: 5px;
        border-radius: 5px 5px 0 0;
    }
    .terminal .btns {
        position: absolute;
        top: 7px;
        left: 5px;
    }
    .terminal .circle {
        width: 12px;
        height: 12px;
        display: inline-block;
        border-radius: 15px;
        margin-left: 2px;
        border-width: 1px;
        border-style: solid;
    }
    .title {
        text-align: center;
        font-family: Verdana, sans-serif;
        font-size: 12px;
        font-weight: bold;
    }
    .red {
        background: #ec6a5f;
        border-color: #d04e42;
    }
    .green {
        background: #64cc57;
        border-color: #4ea73b;
    }
    .yellow {
        background: #f5c04f;
        border-color: #d6a13d;
    }
    .clear {
        clear: both;
    }
    .terminal .body {
        background: black;
        color: #7afb4c;
        padding: 4px;
        overflow: auto;
        border-radius: 0 0 5px 5px;
    }
    .shadow {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
    }
    ::slotted(.dx-input),
    ::slotted(.dx-output) {
        padding: 0;
        color: white;
        margin: 0;
        font-size: 18px;
    }
    .dx-input::before {
        content: '➜ ';
        color: green;
    }
    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono');
    @import url('https://fonts.googleapis.com/css?family=Ubuntu');

    .Terminal {
        /* width: 600px;
        height: 400px; */
        background: linear-gradient(45deg, #57003f 0%, #f57453 100%);
        font-family: 'Ubuntu';
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
    }

    .Terminal__Toolbar {
        background: linear-gradient(#504b45 0%, #3c3b37 100%);
        width: 100%;
        padding: 0 8px;
        box-sizing: border-box;
        height: 25px;
        display: flex;
        align-items: center;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    .Toolbar__buttons {
        display: flex;
        align-items: center;
    }

    .Toolbar__button {
        width: 12px;
        height: 12px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        padding: 0;
        font-size: 7px;
        background: linear-gradient(#7d7871 0%, #595953 100%);
        text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
        box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;
        border: none;
        margin-right: 4px;
    }
    .Toolbar__button:hover {
        cursor: pointer;
    }
    .Toolbar__button--exit {
        background: #f25d2b;
        background: linear-gradient(#f37458 0%, #de4c12 100%);
        background-clip: padding-box;
    }
    .Toolbar__button:focus {
        outline: none;
    }

    .Toolbar__user {
        color: #d5d0ce;
        margin-left: 4px;
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 1px;
    }
    .Terminal__body {
        background: rgba(56, 4, 40, 0.9);
        height: calc(100% - 25px);
        margin-top: -1px;
        padding-top: 2px;
        font-family: 'Ubuntu mono';
    }
    .Terminal__text {
        color: #ddd;
    }

    .Terminal__Prompt {
        margin-top: 10px;
        display: flex;
    }

    .Prompt__user {
        color: #87d441;
    }
    .Prompt__location {
        color: #6d85a9;
    }
    .Prompt__dollar {
        color: #ddd;
    }
    .Prompt__cursor {
        height: 17px;
        width: 8px;
        background: white;
        display: block;
        margin-left: 8px;
        animation: 2000ms ease infinite alternate blink;
    }

    @keyframes blink {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media (max-width: 600px) {
        .Terminal {
            max-height: 90%;
            width: 95%;
        }
    }
`;

/**
 * A terminal emulator element
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('dx-terminal')
export class DxTerminal extends LitElement {
    static override styles = [styles];

    @queryAll('div.input')
    _userInput!: NodeListOf<HTMLElement>;

    @queryAll('div.output')
    _userOutput?: NodeListOf<HTMLElement>;

    /**
     * The operating system template.
     */
    @property({attribute: true})
    os = 'macOS';

    /**
     * The window title.
     */
    @property({attribute: true})
    window = 'macOS Terminal';

    macOSTemplate() {
        return html` <div class="terminal shadow">
            <div class="top">
                <div class="btns">
                    <span class="circle red"></span>
                    <span class="circle yellow"></span>
                    <span class="circle green"></span>
                </div>
                <div class="title">${this.window}</div>
            </div>
            <pre class="body">
                <slot></slot>
            </pre>
        </div>`;
    }

    ubuntuTemplate() {
        return html`
            <div class="Terminal">
                <div class="Terminal__Toolbar">
                    <div class="Toolbar__buttons">
                        <button class="Toolbar__button Toolbar__button--exit">
                            &#10005;
                        </button>
                        <button class="Toolbar__button">&#9472;</button>
                        <button class="Toolbar__button">&#9723;</button>
                    </div>
                    <p class="Toolbar__user">cody@ubuntu:~</p>
                </div>
                <div class="Terminal__body">
                    <div class="Terminal__text">Welcome to Ubuntu!</div>
                    <div class="Terminal__Prompt">
                        <span class="Prompt__user">cody@ubuntu:</span
                        ><span class="Prompt__location">~</span
                        ><span class="Prompt__dollar">$</span>
                        <span class="Prompt__cursor"></span>
                    </div>
                </div>
            </div>
        `;
    }

    override render() {
        switch (this.os.toLowerCase()) {
            case 'macos': {
                return this.macOSTemplate();
                break;
            }
            case 'ubuntu': {
                return this.ubuntuTemplate();
                break;
            }
            default:
                return this.macOSTemplate();
        }
    }

    //   private _onClick() {
    //         this.count++;
    //         this.dispatchEvent(new CustomEvent('count-changed'));
    //   }

    /**
     * Formats a greeting
     * @param name The name to say "Hello" to
     */
    sayHello(name: string): string {
        return `Hello, ${name}`;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-terminal': DxTerminal;
  }
}
