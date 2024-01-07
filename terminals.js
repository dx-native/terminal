import { html } from 'lit';
const clipboard = html `<button
    class="reset copy-to-clip js-copy-to-clip"
    type="button"
    title="Click to copy"
    aria-controls="snippet-code-0"
>
    <svg class="icon icon--xs" width="16" height="16" viewBox="0 0 16 16">
        <title>Click to copy</title>
        <path
            d="M12,2h.5A1.5,1.5,0,0,1,14,3.5v10A1.5,1.5,0,0,1,12.5,15h-9A1.5,1.5,0,0,1,2,13.5V3.5A1.5,1.5,0,0,1,3.5,2H4"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="2"
        ></path>
        <rect
            x="6"
            y="1"
            width="4"
            height="2"
            fill="currentColor"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
        ></rect>
    </svg>
</button>`;
const macOSTemplate = (window) => {
    return html ` <div class="mac-terminal mac-shadow">
        <div class="mac-top">
            <div class="mac-btns">
                <span class="mac-circle mac-red"></span>
                <span class="mac-circle mac-yellow"></span>
                <span class="mac-circle mac-green"></span>
            </div>
            <div class="mac-title">${window}</div>
            <div class="dx-clipboard">${clipboard}</div>
        </div>
        <pre class="mac-body">
            <slot></slot>
        </pre>
    </div>`;
};
const ubuntuTemplate = (window) => {
    return html `
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
                <div class="dx-clipboard">${clipboard}</div>
            </div>
            <pre class="ubuntu-terminal-body">
                <slot></slot>
            </pre>
        </div>
    `;
};
export { macOSTemplate, ubuntuTemplate };
//# sourceMappingURL=terminals.js.map