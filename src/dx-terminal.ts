/**
 * @license
 * Copyright 2023 cbCodeStudio LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {queryAll} from 'lit/decorators/query-all.js';

/**
 * macOS Template
 */
const macOSTemplate = (windowTitle: string) => {
    return html` <div class="terminal shadow">
        <div class="top">
            <div class="btns">
                <span class="circle red"></span>
                <span class="circle yellow"></span>
                <span class="circle green"></span>
            </div>
            <div class="title">${windowTitle}</div>
        </div>
        <pre class="body">
            <slot></slot>
        </pre>
    </div>`;};

const macOSStyles = css`
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

    static override styles = [macOSStyles];

    @queryAll('div.input')
    _userInput!: NodeListOf<HTMLElement>;

    @queryAll('div.output')
    _userOutput?: NodeListOf<HTMLElement>;

    /**
     * The window title.
     */
    @property({ attribute: true })
    window = 'macOS Terminal';

    osTemplate(os: string) {
        switch(os) { 
            case 'macOS': { 
                return macOSTemplate(this.window);
                break; 
            } 
            default: { 
                return macOSTemplate(this.window);
                break; 
            } 
         } 
    }

    override render() {
        return this.osTemplate('macOS');
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
