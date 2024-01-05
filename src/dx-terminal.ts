/**
 * @license
 * Copyright 2023 cbCodeStudio LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {queryAll} from 'lit/decorators/query-all.js';
import dxStyles from './styles.js';

/**
 * A terminal emulator element
 *
 * @slot - This element has a slot
 */
@customElement('dx-terminal')
export class DxTerminal extends LitElement {
    static override styles = dxStyles;

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
                    <p class="Toolbar__user">${this.window}</p>
                </div>
                <div class="Terminal__body">
                    <div class="Terminal__Prompt">
                        <slot></slot>
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
