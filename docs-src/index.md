---
layout: page.11ty.cjs
title: <dx-terminal> ⌲ Home
---

# &lt;dx-terminal>

`<dx-terminal>` is a Native HTML element built with Lit. It is a wrapper for 
displaying terminal emulation on a web page.

## As easy as HTML

<section class="columns">
  <div>

`<dx-terminal>` is just an HTML element. You can it anywhere you can use HTML!

```html
<dx-terminal></dx-terminal>
```

  </div>
  <div>

<dx-terminal></dx-terminal>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<dx-terminal>` can be configured with attributed in plain HTML.

```html
<dx-terminal name="HTML"></dx-terminal>
```

  </div>
  <div>

<dx-terminal name="HTML"></dx-terminal>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<dx-terminal>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;dx-terminal&gt;</h2>
    <dx-terminal .name=${name}></dx-terminal>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;dx-terminal&gt;</h2>
<dx-terminal name="lit-html"></dx-terminal>

  </div>
</section>
