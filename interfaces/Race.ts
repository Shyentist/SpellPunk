import { Bson } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

import { db } from '../db/db.ts';

import { SkillSchema } from './Skill.ts';

// Define schema.
export interface RaceSchema {
  _id: ObjectId;
  name: string;
  description: string;
  bodyMod: string;
  mindMod: number;
  soulMod: number;
  xpMod: number;
  skill: SkillSchema|"";
};

export const races = db.collection<RaceSchema>("races");