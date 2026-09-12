import { ApiEntity } from './entity/ApiEntity';
import { BatmanEntity } from './entity/BatmanEntity';
import { DcnEntity } from './entity/DcnEntity';
import { StarWarEntity } from './entity/StarWarEntity';
export type * from './McuCountdownTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { McuCountdownEntityBase } from './McuCountdownEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class McuCountdownSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Api(entopts?: Record<string, any>): ApiEntity;
    Batman(entopts?: Record<string, any>): BatmanEntity;
    Dcn(entopts?: Record<string, any>): DcnEntity;
    StarWar(entopts?: Record<string, any>): StarWarEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): McuCountdownSDK;
    tester(testopts?: any, sdkopts?: any): McuCountdownSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof McuCountdownSDK;
export { stdutil, config, BaseFeature, McuCountdownEntityBase, McuCountdownSDK, SDK, };
