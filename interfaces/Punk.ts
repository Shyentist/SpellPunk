import { Bson } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

import { db } from '../db/db.ts';

import { RaceSchema } from './Race.ts';
import { RoleSchema } from './Role.ts';
import { SkillSchema } from './Skill.ts';
import { EquipableSchema } from "./Equipable.ts";

// Defining interface
export interface PunkSchema {
  _id?: ObjectId;
  chatId: number;
  name: string;
  description: string;
  progress: {
    level: number;
    bodyMod: number;
    mindMod: number;
    soulMod: number;
    xp: number;
  };
  race: RaceSchema;
  role: RoleSchema;
  inventory: EquipableSchema[] | [];
  equipment: EquipableSchema[] | [];
  status: {
    exploration: {
      active: boolean;
      arrival: Date | "";
      loot: string | "";
    }
  };
  sheet: {
    race: string;
    role: string;
    morale: number;
    body: number;
    mind: number;
    soul: number;
    attack: number;
    defense: number;
    prowess: number;
    speed: number;
    craft: number;
    energy: number;
    aura: number;
    connection: number;
    fate: number;
    skills: SkillSchema[];
  }
}

export const punks = db.collection<PunkSchema>("punks");