import {css} from 'lit';

const styles = css`
    pre {
        margin: 0;
        padding: 0;
    }
    .dx-clipboard {
        width: 48px;
    }
    ::slotted(.dx-input),
    ::slotted(.dx-output) {
        padding: 0;
        color: white;
        margin: 0;
        font-size: 18px;
    }
    ::slotted(.dx-input)::before {
        content: '➜ ';
        color: green;
    }

    .mac-terminal {
        border-radius: 5px 5px 0 0;
        position: relative;
    }
    .mac-terminal .mac-top {
        background: #514f51;
        color: #e8e6e8;
        padding: 5px;
        border-radius: 5px 5px 0 0;
    }
    .mac-terminal .mac-btns {
        position: absolute;
        top: 7px;
        left: 5px;
    }
    .mac-terminal .mac-circle {
        width: 12px;
        height: 12px;
        display: inline-block;
        border-radius: 15px;
        margin-left: 2px;
        border-width: 1px;
        border-style: solid;
    }
    .mac-title {
        text-align: center;
        font-family: Verdana, sans-serif;
        font-size: 12px;
        font-weight: bold;
    }
    .mac-red {
        background: #ec6a5f;
        border-color: #d04e42;
    }
    .mac-green {
        background: #64cc57;
        border-color: #4ea73b;
    }
    .mac-yellow {
        background: #f5c04f;
        border-color: #d6a13d;
    }
    .mac-clear {
        clear: both;
    }
    .mac-terminal .mac-body {
        background: black;
        color: #7afb4c;
        padding: 4px;
        overflow: auto;
        border-radius: 0 0 5px 5px;
    }
    .mac-shadow {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
    }

    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono');
    @import url('https://fonts.googleapis.com/css?family=Ubuntu');

    .ubuntu-terminal {
        position: relative;
        font-family: 'Ubuntu';
        border-radius: 6px;
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
    }

    .ubuntu-terminal-toolbar {
        background: linear-gradient(#504b45 0%, #3c3b37 100%);
        width: 100%;
        padding: 0 8px;
        box-sizing: border-box;
        height: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    .ubuntu-toolbar-buttons {
        display: flex;
        align-items: center;
    }

    .ubuntu-toolbar-button {
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
    .ubuntu-toolbar-button:hover {
        cursor: pointer;
    }
    .ubuntu-toolbar-button-exit {
        background: #f25d2b;
        background: linear-gradient(#f37458 0%, #de4c12 100%);
        background-clip: padding-box;
    }
    .ubuntu-toolbar-button:focus {
        outline: none;
    }

    .ubuntu-toolbar-window {
        color: #d5d0ce;
        text-align: center;
        font-family: 'Ubuntu';
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 1px;
    }
    .ubuntu-terminal-body {
        background: rgba(56, 4, 40, 0.9);
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        margin-top: -1px;
        padding: 5px;
        font-family: 'Ubuntu mono';
    }
`;

export default styles;