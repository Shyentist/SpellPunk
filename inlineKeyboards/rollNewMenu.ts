import { Menu, MenuRange } from 'https://deno.land/x/grammy_menu@v1.1.2/mod.ts';
import { races } from '../infos/races.ts';
import { roles } from '../infos/roles.ts';
import { races as racesDb } from '../interfaces/Race.ts';
import { roles  as rolesDb } from '../interfaces/Role.ts';
import { mainKeyboard } from '../customKeyboards/mainKeyboard.ts';
import { punks as punksDb } from '../interfaces/Punk.ts';
import { createNewPunk } from '../utils/createNewPunk.ts';
import { writePunkSheet } from "../utils/writePunkSheet.ts"

// Create a Role menu.
const roleMenu = new Menu('role-menu')
  .dynamic(() => {
    const range = new MenuRange();
    
    roles.forEach((role) => {
      range
        .text(role.name, async (ctx) => {

          const chatId = await ctx.chat.id;

          // Get info from DB about the chosen role for the new Punk
          const newRole = await rolesDb.findOne({ name: role.name });

          await punksDb.updateOne({ chatId: chatId }, { $set: { role: newRole }});

          let punk = await punksDb.findOne({ chatId: chatId })

          const sheet = await writePunkSheet(punk);

          await punksDb.updateOne({ chatId: chatId }, { $set: { sheet: sheet }});

          // Close menu, the new Punk has been successfully created
          await ctx.menu.close();

          await ctx.reply('Interesting choice. I will write everything down on your Sheet.', { reply_markup: mainKeyboard })
        })
        .row();
    })
    
    return range;
  })


// Create a Race menu.
export const rollNewMenu = new Menu('roll-new-menu')
  .dynamic(() => {
    const range = new MenuRange();
    
    races.forEach((race) => {
      range
        .text(race.name, async (ctx) => {

          const chatId = await ctx.chat.id;
          const name = await ctx.chat.username || chatId.toString();

          // Get info from DB about the chosen role for the new Punk
          const newRole = await rolesDb.findOne({ name: "🪖 Fighter" });

          const newRace = await racesDb.findOne({ name: race.name });

          // Delete old Punk
          await punksDb.deleteOne({ chatId: chatId });

          // Save Punk to DB
          await punksDb.insertOne(createNewPunk(chatId, name, newRace, newRole))

          await ctx.menu.close();
          await ctx.menu.nav('role-menu');

        })
        .row()
    })
    
    return range;
  })

rollNewMenu.register(roleMenu);