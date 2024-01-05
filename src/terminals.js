import {html} from 'lit';

const macOSTemplate = (window) => {
    return html` <div class="terminal shadow">
        <div class="top">
            <div class="btns">
                <span class="circle red"></span>
                <span class="circle yellow"></span>
                <span class="circle green"></span>
            </div>
            <div class="title">${window}</div>
        </div>
        <pre class="body">
            <slot></slot>
        </pre>
    </div>`;
}

const ubuntuTemplate = (window) => {
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
                <p class="Toolbar__user">${window}</p>
            </div>
            <div class="Terminal__body">
                <div class="Terminal__Prompt">
                    <slot></slot>
                </div>
            </div>
        </div>
    `;
}

export { macOSTemplate, ubuntuTemplate };