import {css} from 'lit';

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
        position: relative;
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
        margin-top: -1px;
        padding-top: 2px;
        font-family: 'Ubuntu mono';
    }
    .Terminal__text {
        color: #ddd;
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
`;

export default styles;