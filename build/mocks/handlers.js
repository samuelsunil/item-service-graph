"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlers = void 0;
const msw_1 = require("msw");
exports.handlers = [
    msw_1.http.get('/items', (req) => {
        return msw_1.HttpResponse.json([
            { id: '1', name: 'Mocked Item 1', description: 'Mocked Description for Item 1' },
            { id: '2', name: 'Mocked Item 2', description: 'Mocked Description for Item 2' },
        ]);
    })
];
