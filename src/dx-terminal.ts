/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * macOS Template
 */
const macOSTemplate = html`
    <div class="terminal space shadow">
        <div class="top">
            <div class="btns">
                <span class="circle red"></span>
                <span class="circle yellow"></span>
                <span class="circle green"></span>
            </div>
        <div class="title">bash -- 70x32</div>
    </div>
    <pre class="body">
        <slot></slot>
    </pre>
    </div>`;

const macOSStyles = css`
    pre { margin: 0; padding: 0; } 
    .terminal {
        border-radius: 5px 5px 0 0;
        position: relative;
    }
    .terminal .top {
        background: #E8E6E8;
        color: black;
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
    .title{
        text-align: center;
    }
    .red { background: #EC6A5F; border-color: #D04E42; }
    .green { background: #64CC57; border-color: #4EA73B; }
    .yellow{ background: #F5C04F; border-color: #D6A13D; }
    .clear{clear: both;}
    .terminal .body {
        background: black;
        color: #7AFB4C;
        padding: 8px;
        overflow: auto;
    }
    .space {
        margin: 25px;
    }
    .shadow { box-shadow: 0px 0px 10px rgba(0,0,0,.4)}
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
    /**
     * The name to say "Hello" to.
     */
    @property()
    name = 'World';

    /**
     * The number of times the button has been clicked.
     */
    @property({type: Number})
    count = 0;

    osTemplate(os: string) {
        switch(os) { 
            case 'macOS': { 
                return macOSTemplate;
                break; 
            } 
            default: { 
                return macOSTemplate;
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
