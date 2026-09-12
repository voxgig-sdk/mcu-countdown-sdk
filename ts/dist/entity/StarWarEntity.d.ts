import { McuCountdownEntityBase } from '../McuCountdownEntityBase';
import type { McuCountdownSDK } from '../McuCountdownSDK';
import type { Control } from '../types';
import type { StarWar, StarWarLoadMatch } from '../McuCountdownTypes';
declare class StarWarEntity extends McuCountdownEntityBase<StarWar> {
    constructor(client: McuCountdownSDK, entopts: any);
    make(this: StarWarEntity): StarWarEntity;
    load(this: any, reqmatch?: StarWarLoadMatch, ctrl?: Control): Promise<StarWarEntity>;
}
export { StarWarEntity };
