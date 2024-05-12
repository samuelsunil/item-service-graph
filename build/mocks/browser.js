"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const browser_1 = require("msw/browser");
const handlers_1 = require("./handlers");
const worker = (0, browser_1.setupWorker)(...handlers_1.handlers);
worker.start();
