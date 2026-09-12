import { McuCountdownEntityBase } from '../McuCountdownEntityBase';
import type { McuCountdownSDK } from '../McuCountdownSDK';
import type { Control } from '../types';
import type { Dcn, DcnLoadMatch } from '../McuCountdownTypes';
declare class DcnEntity extends McuCountdownEntityBase<Dcn> {
    constructor(client: McuCountdownSDK, entopts: any);
    make(this: DcnEntity): DcnEntity;
    load(this: any, reqmatch?: DcnLoadMatch, ctrl?: Control): Promise<DcnEntity>;
}
export { DcnEntity };
