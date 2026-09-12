import { McuCountdownEntityBase } from '../McuCountdownEntityBase';
import type { McuCountdownSDK } from '../McuCountdownSDK';
import type { Control } from '../types';
import type { Api, ApiLoadMatch } from '../McuCountdownTypes';
declare class ApiEntity extends McuCountdownEntityBase<Api> {
    constructor(client: McuCountdownSDK, entopts: any);
    make(this: ApiEntity): ApiEntity;
    load(this: any, reqmatch?: ApiLoadMatch, ctrl?: Control): Promise<ApiEntity>;
}
export { ApiEntity };
