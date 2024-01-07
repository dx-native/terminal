import * as React from 'react';
import { createComponent } from '@lit/react';
import { DxTerminal } from './dx-terminal.js';
export const DxTerminalComponent = createComponent({
    tagName: 'dx-terminal',
    elementClass: DxTerminal,
    react: React,
    events: {
        onactivate: 'activate',
        onchange: 'change',
    },
});
//# sourceMappingURL=DxTerminal.js.map