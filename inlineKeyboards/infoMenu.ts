import { Menu } from 'https://deno.land/x/grammy_menu@v1.1.2/mod.ts';
import { racesIntroText } from '../infos/races.ts';
import { statsIntroText } from '../infos/stats.ts';
import { rolesIntroText } from '../infos/roles.ts';
import { creditsText } from '../infos/credits.ts';

// Create a Race menu.
export const infoMenu = new Menu('info-menu')
    .text('Stats', async (ctx) => { 
        await ctx.reply(statsIntroText, { parse_mode: 'HTML', reply_markup: infoMenu }); 
    })
    .text('Races', async (ctx) => { 
        await ctx.reply(racesIntroText, { parse_mode: 'HTML', reply_markup: infoMenu }); 
    })
    .text('Roles', async (ctx) => { 
        await ctx.reply(rolesIntroText, { parse_mode: 'HTML', reply_markup: infoMenu }); 
    }).row()
    .text('Credits', async (ctx) => { 
        await ctx.reply(creditsText, { parse_mode: 'HTML', disable_web_page_preview:true, reply_markup: infoMenu }); 
    })