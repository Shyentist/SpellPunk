import { explorationReward } from './explorationReward.ts'
import { punks } from '../interfaces/Punk.ts';
import { equipables } from '../interfaces/Equipable.ts';

export const explore = async (ctx) => {

  const chatId = await ctx.chat.id;
    
  // Find Punk who wants to explore
  const punk = await punks.findOne({ chatId: chatId });

  if (punk.status.exploration.active) {

    const arrival = punk.status.exploration.arrival;

    if (arrival < new Date()){
      explorationReward(ctx);

      return
    }

    const message = `Your Punk is already out, and will be back on ${ arrival }.`

    return message;

  } else {
    
    const explorationTime = 20000 // 20 seconds
    
    const departure = new Date();
    
    const arrival = new Date(departure.getTime() + explorationTime);

    const possibleLoot = await equipables.find({ $and: [{ bonus: { $gte: punk.progress.level }}, {bonus: { $lte: punk.progress.level + 10 }}] }).toArray();

    const loot = possibleLoot[Math.floor(Math.random()*possibleLoot.length)];

    console.log(loot)

    setTimeout(() => {
      explorationReward(ctx);
    }, explorationTime);

    await punks.updateOne({ chatId: chatId }, {$set: {status: {exploration: { active: true, arrival: arrival, loot: loot }}}})

    const message = `Your Punk begins exploring, and will be back on ${ arrival }.`

    return message;

  }
      
}