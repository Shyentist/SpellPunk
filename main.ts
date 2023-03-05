import { Bot } from 'https://deno.land/x/grammy@v1.13.0/mod.ts';
 
//  Menus
import { rollNewMenu } from './inlineKeyboards/rollNewMenu.ts';
import { infoMenu } from './inlineKeyboards/infoMenu.ts';

// Keyboards
import { mainKeyboard } from './customKeyboards/mainKeyboard.ts';
import { startKeyboard } from './customKeyboards/startKeyboard.ts';

// Utils
import { explore } from './utils/explore.ts'
import { punkSheetTemplate } from './utils/punkSheetTemplate.ts';

// _dev
import { rarities, objects, buildEquipables } from './_dev/_equipables.js';
import { token } from './_dev/token.ts';

// Create Bot
const bot = await new Bot(token);

// Use Menus
bot.use(rollNewMenu);
bot.use(infoMenu);

bot.command('start', async (ctx) => {

  const worldIntroText:string = `Welcome to the world of SpellPunk, mysterious traveller. In these lands, merely decades ago, a seemingly apocalyptic and most curious event occurred, the Connection. Otherworldly entities started manifesting into our world, or rather, it was our worlds entire that "connected", shattering the natural order as we knew it, throwing the world in an unbalanced state in which Punks rule, roam, and roar.
  
If you wish to read a systematic description of this world, you can click on the button "📚 Lore". If you ever forget anything in the future, just type it again. If you want to start a new game, roll a new Punk with "🆕 Roll New Punk".`

  await ctx.reply(worldIntroText, { reply_markup: startKeyboard });

});

//bot.command('build_equip', async (ctx) => { 
//  await buildEquipables(objects, rarities)

//  ctx.reply("Done")
//})

bot.hears(/^Lore$|^📚 Lore$/, async (ctx) => {
  await ctx.reply('On which of these topics would you like to be enlightened?', { reply_markup: infoMenu });
})

bot.hears(/^Roll New Punk$|^🆕 Roll New Punk$/, async (ctx) => {
  
  ctx.reply('What are your Race and Role, Punk?', { reply_markup: rollNewMenu });
})

bot.hears(/^Sheet$|^📝 Sheet$/ , async (ctx) => {

  const sheetHTML = await punkSheetTemplate(ctx);

  await ctx.reply(sheetHTML, { parse_mode: 'HTML' });

})

bot.hears(/^Explore$|^🗺 Explore$/ , async (ctx) => {

  const message = await explore(ctx);

  ctx.reply(message);
})

bot.start();