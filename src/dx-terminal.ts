/**
 * @license
 * Copyright 2023 cbCodeStudio LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {queryAll} from 'lit/decorators/query-all.js';
import dxStyles from './styles.js';
import {macOSTemplate, ubuntuTemplate} from './terminals.js';
import {DxTerminalComponent} from './DxTerminal.js';

/**
 * A terminal emulator element
 *
 * @slot - This element has a slot
 */
@customElement('dx-terminal')
export class DxTerminal extends LitElement {
    static override styles = dxStyles;

    public override firstUpdated() {
        this.shadowRoot
            ?.querySelector('.dx-clipboard')
            ?.addEventListener('click', () => {
                // Copy the text inside the slot input
                navigator.clipboard.writeText(
                    this.shadowRoot
                        ?.querySelector('slot')
                        ?.assignedElements({flatten: true})
                        .filter((e) => e.className === 'dx-input')
                        .map((e) => e.innerHTML)
                        .join('\r\n') ?? ''
                );
            });
    }
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

    override render() {
        switch (this.os.toLowerCase()) {
            case 'macos': {
                return macOSTemplate(this.window);
                break;
            }
            case 'ubuntu': {
                return ubuntuTemplate(this.window);
                break;
            }
            default:
                return macOSTemplate(this.window);
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

export {DxTerminalComponent};

declare global {
  interface HTMLElementTagNameMap {
    'dx-terminal': DxTerminal;
  }
}
