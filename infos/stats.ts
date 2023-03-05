type derivedStat = {
    name:string, 
    description:string
};

type stat = {
    name:string, 
    derivedStats:derivedStat[]
};

const stats:stat[] = [
    {
        name: '💪 Body',
        derivedStats: [
            {
                name: 'Attack',
                description: 'Enhances hit rate and damage dealt',
            },
            {
                name: 'Defense',
                description: 'Enhances dodge/block rate and minimises damage taken',
            },
            {
                name: 'Prowess',
                description: 'Affects maneuvers, resistance to physical deprivations and to critical hits, and inventory space',
            }
        ]
    },
    {
        name: '🧠 Mind',
        derivedStats: [
            {
                name: 'Speed',
                description: 'Determines the speed in and out of combat, the likelihood of successful fleeing, and the chance of critical hits',
            },
            {
                name: 'Craft',
                description: 'Increases the quality of crafted items and the ability to lockpick',
            },
            {
                name: 'Energy',
                description: 'Determines how many supernatural actions one can perform',
            }
        ]
    },
    {
        name: '🌀 Soul',
        derivedStats: [
            {
                name: 'Aura',
                description: 'Determines whether one hits or gets hit by a supernatural effect, dealing or taking difference as damage, if any',
            },
            {
                name: 'Connection',
                description: 'Determines the likelihood to elude death and to save Experience Points when they should have been spent or lost',
            },
            {
                name: 'Fate',
                description: 'Determines the likelihood to inspire emotions in creatures and to earn more rewarding loot',
            }
        ]
    }
];

let statsIntroText:string = `Every character is somewhat defined by 3 main statistics, Body, Mind, and Soul. Each of them affects 3 derived statistics, which are the numbers that will most often be used to determine a character's success or failure for a task. The stats and derived stats work as follows:\n`;

stats.forEach((stat) => {

    let statToAppend = `\n<b>${stat.name.toUpperCase()}</b>\n`;

    stat.derivedStats.forEach((derivedStat) => {
        
        let derivedStatToAppend = `\n<b>${derivedStat.name}:</b> ${derivedStat.description}.\n`

        statToAppend += derivedStatToAppend
    });

    statsIntroText += statToAppend;
}) 

export { statsIntroText };