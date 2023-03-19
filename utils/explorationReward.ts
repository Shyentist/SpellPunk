import { punks } from '../interfaces/Punk.ts';

export const explorationReward = async (ctx):Promise<void> => {

    const chatId = await ctx.chat.id;
    
    // Find Punk who comes back from exploring
    const punk = await punks.findOne({ chatId: chatId });

    // Prepare what to update
    const loot = punk.status.exploration.loot;
    let inventory = punk.inventory;
    const exploration = { active: false, arrival: "", loot: "" };

    inventory.push(loot);

    await punks.updateOne({ chatId: chatId }, {$set: {status: {exploration: exploration}, inventory: inventory}});

    const message = `Your Punk has returned from their exploration, having found: ${ loot.name }.`;

    ctx.reply(message);
}