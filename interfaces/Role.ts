import { Bson } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

import { db } from '../db/db.ts';

import { SkillSchema } from './Skill.ts';

// Define schema.
export interface RoleSchema {
  _id: ObjectId;
  name: string;
  description: string;
  attackMod: number;
  defenseMod: number;
  prowessMod: number;
  speedMod: number;
  craftMod: number;
  energyMod: number;
  auraMod: number;
  connectionMod: number;
  fateMod: number;
  skill: SkillSchema;
};

export const roles = db.collection<RoleSchema>("roles");
