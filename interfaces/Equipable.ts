import { Bson } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

import { db } from '../db/db.ts';

export interface EquipableSchema {
  _id: ObjectId;
  name: string;
  bonusTo: string[];
  bonus: number;
  slot: string;
}

export const equipables = db.collection<EquipableSchema>("equipables");