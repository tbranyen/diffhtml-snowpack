import { innerHTML, html } from 'diffhtml';
import { Component } from 'diffhtml-components';
import { App } from './app';

innerHTML(document.body, html`
  <${App} />
`);

// hmr support
if (import.meta.hot) {
  import.meta.hot.accept(() => {});
  import.meta.hot.dispose(() => {});
}
