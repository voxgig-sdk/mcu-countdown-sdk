"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.McuCountdownError = void 0;
class McuCountdownError extends Error {
    isMcuCountdownError = true;
    sdk = 'McuCountdown';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.McuCountdownError = McuCountdownError;
//# sourceMappingURL=McuCountdownError.js.map