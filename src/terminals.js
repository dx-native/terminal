import {html} from 'lit';

const macOSTemplate = (window) => {
    return html` <div class="mac-terminal mac-shadow">
        <div class="mac-top">
            <div class="mac-btns">
                <span class="mac-circle mac-red"></span>
                <span class="mac-circle mac-yellow"></span>
                <span class="mac-circle mac-green"></span>
            </div>
            <div class="mac-title">${window}</div>
        </div>
        <pre class="mac-body">
            <slot></slot>
        </pre>
    </div>`;
}

const ubuntuTemplate = (window) => {
    return html`
        <div class="ubuntu-terminal">
            <div class="ubuntu-terminal-toolbar">
                <div class="ubuntu-toolbar-buttons">
                    <button
                        class="ubuntu-toolbar-button ubuntu-toolbar-button-exit"
                    >
                        &#10005;
                    </button>
                    <button class="ubuntu-toolbar-button">&#9472;</button>
                    <button class="ubuntu-toolbar-button">&#9723;</button>
                </div>
                <div class="ubuntu-toolbar-window">${window}</div>
                <div class="ubuntu-filler">&nbsp;</div>
            </div>
            <div class="ubuntu-terminal-body">
                <slot></slot>
            </div>
        </div>
    `;
}

export { macOSTemplate, ubuntuTemplate };