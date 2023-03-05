import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

export const client = new MongoClient();

await client.connect("mongodb://127.0.0.1:27017");

export const db = await client.database("SpellPunk");