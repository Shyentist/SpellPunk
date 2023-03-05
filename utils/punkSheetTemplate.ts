import { punks } from "../interfaces/Punk.ts";

export const punkSheetTemplate  = async (ctx) => {

    const punk = await punks.findOne({ chatId: ctx.chat.id });

    const sheet = `<b>${punk.name} ${punk.sheet.race} ${punk.sheet.role} (${punk.progress.level})</b>
<pre><b>💪 Body:        ${punk.sheet.body}</b>

    Attack:     ${punk.sheet.attack}
    Defense:    ${punk.sheet.defense}
    Prowess:    ${punk.sheet.prowess}
    
<b>🧠 Mind:        ${punk.sheet.mind}</b>
    
    Speed:      ${punk.sheet.speed}
    Craft:      ${punk.sheet.craft}
    Energy:     ${punk.sheet.energy}
    
<b>🌀 Soul:        ${punk.sheet.soul}</b>
    
    Aura:       ${punk.sheet.aura}
    Connection: ${punk.sheet.connection}
    Fate:       ${punk.sheet.fate}</pre>`
    
    return sheet;
}