import { Bot } from 'https://deno.land/x/grammy@v1.13.0/mod.ts';
 
//  Menus
import { rollNewMenu } from './inlineKeyboards/rollNewMenu.ts';
import { infoMenu } from './inlineKeyboards/infoMenu.ts';

// Keyboards
import { mainKeyboard } from './customKeyboards/mainKeyboard.ts';
import { startKeyboard } from './customKeyboards/startKeyboard.ts';

// Utils
import { explore } from './utils/explore.ts'
import { inventory } from './utils/inventory.ts';
import { punkSheetTemplate } from './utils/punkSheetTemplate.ts';

// Custom Context
import { MyContext } from './interfaces/MyContext.ts';

// _dev
import { token } from './_dev/_token.ts';
import { rarities, objects, buildEquipables } from './_dev/_equipables.js';
import { BOT_DEVELOPER } from './_dev/_devId.ts';

// Create Bot
const bot = await new Bot<MyContext>(token);

// Use Menus
bot.use(rollNewMenu);
bot.use(infoMenu);

// Config
bot.use(async (ctx, next) => {
  // Modify context object here by setting the config.
  ctx.config = {
    botDeveloper: BOT_DEVELOPER,
    isDeveloper: ctx.from?.id === BOT_DEVELOPER,
  };
  // Run remaining handlers.
  await next();
});

bot.command('start', async (ctx) => {

  const worldIntroText:string = `Welcome to the world of SpellPunk, mysterious traveller. In these lands, merely decades ago, a seemingly apocalyptic and most curious event occurred, the Connection. Otherworldly entities started manifesting into our world, or rather, it was our worlds entire that "connected", shattering the natural order as we knew it, throwing the world in an unbalanced state in which Punks rule, roam, and roar.
  
If you wish to read a systematic description of this world, you can click on the button "📚 Lore". If you ever forget anything in the future, just type it again. If you want to start a new game, roll a new Punk with "🆕 Roll New Punk".`

  await ctx.reply(worldIntroText, { reply_markup: startKeyboard });

});

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

  await explore(ctx);
})

bot.hears(/^Inventory$|^🎒 Inventory$/ , async (ctx) => {

  await inventory(ctx);
})

// dev only

bot.command('build_equip', async (ctx) => { 

  if(ctx.config.isDeveloper){
    await buildEquipables(objects, rarities);

    ctx.reply("Done");
  }
  
});

bot.start();