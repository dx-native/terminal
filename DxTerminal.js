'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { DxTerminal as Lit } from './dx-terminal.js';
export const DxTerminal = createComponent({
    tagName: 'dx-terminal',
    elementClass: Lit,
    react: React,
    events: {
        onactivate: 'activate',
        onchange: 'change',
    },
});
//# sourceMappingURL=DxTerminal.js.map