import { Context } from './Context';
declare class McuCountdownError extends Error {
    isMcuCountdownError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { McuCountdownError };
