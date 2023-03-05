import { Bson } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

import { db } from '../db/db.ts';

// Define schema.
export interface SkillSchema {
    _id: ObjectId;
    name: string;
    description: string;
    public: boolean;
};

export const skills = db.collection<SkillSchema>("skills");
