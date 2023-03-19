import { punks } from '../interfaces/Punk.ts';

export const inventory = async (ctx):Promise<void> => {
    const punk = await punks.findOne({ chatId: ctx.chat.id });

    let inventory:string[] = [];

    punk.inventory.forEach((element) => {
        inventory.push(element.name);
    });

    let listElement:string = `\n`;

    function inventoryList(inventory) {
        if(inventory.length !== 0){

            for (let i = 0; i < inventory.length; i++){
                listElement = listElement + `\n${inventory[i]}`;
            };

            return listElement;
        } else {
            return "Nothing";
        }
    };
    ctx.reply(`Your inventory contains: ${inventoryList(inventory.sort())}`) 
};