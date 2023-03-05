import { RaceSchema } from "../interfaces/Race.ts"
import { RoleSchema } from "../interfaces/Role.ts"
import { PunkSchema } from "../interfaces/Punk.ts";

export function createNewPunk(chatId:number, name:string, race:RaceSchema, role:RoleSchema):PunkSchema {
    const punk = {
        chatId: chatId,
        name: name,
        description: "",
        progress: {
            level: 0,
            bodyMod: 0,
            mindMod: 0,
            soulMod: 0,
            xp: 0
        },
        sheet: {},
        race: race,
        role: role,
        inventory: [],
        equipment: [],
        status: {
            exploration: {
                active: false,
                arrival: "",
                loot: ""
            }
        }
    };

    return punk;
}