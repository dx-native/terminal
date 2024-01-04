/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {DxTerminal} from '../dx-terminal.js';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('dx-terminal', () => {
  test('is defined', () => {
    const el = document.createElement('dx-terminal');
    assert.instanceOf(el, DxTerminal);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<dx-terminal></dx-terminal>`);
    assert.shadowDom.equal(
      el,
      `
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
    </div>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<dx-terminal name="Test"></dx-terminal>`);
    assert.shadowDom.equal(
      el,
      `
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
    </div>
    `
    );
  });

//   test('handles a click', async () => {
//     const el = (await fixture(html`<dx-terminal></dx-terminal>`)) as DxTerminal;
//     const button = el.shadowRoot!.querySelector('button')!;
//     button.click();
//     await el.updateComplete;
//     assert.shadowDom.equal(
//       el,
//       `
//       <h1>Hello, World!</h1>
//       <button part="button">Click Count: 1</button>
//       <slot></slot>
//     `
//     );
//   });

  test('styling applied', async () => {
    const el = (await fixture(html`<dx-terminal></dx-terminal>`)) as DxTerminal;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '0px');
  });
});
