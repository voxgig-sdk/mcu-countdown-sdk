import { McuCountdownEntityBase } from '../McuCountdownEntityBase';
import type { McuCountdownSDK } from '../McuCountdownSDK';
import type { Control } from '../types';
import type { Batman, BatmanLoadMatch } from '../McuCountdownTypes';
declare class BatmanEntity extends McuCountdownEntityBase<Batman> {
    constructor(client: McuCountdownSDK, entopts: any);
    make(this: BatmanEntity): BatmanEntity;
    load(this: any, reqmatch?: BatmanLoadMatch, ctrl?: Control): Promise<BatmanEntity>;
}
export { BatmanEntity };
