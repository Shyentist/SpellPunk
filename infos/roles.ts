type role = {
    name:string,
    description:string,
    bonusTo:string,
    skill:string
};

const roles:role[] = [
    {
        name: '🥾 Strider',
        description: 'A traveller ready to venture into the wilderness with a steady step.',
        bonusTo: 'Speed and Prowess',
        skill: 'On a successful maneuver, a Strider attacks as well.'
    },
    {
        name: '🧑‍🏭 Fixer',
        description: 'An ingenous inventor who skillfully crafts the right tool for the job.',
        bonusTo: 'Craft and Connection',
        skill: 'When using a disposable item, there is a chance to craft it back immediately at no additional cost.'
    },
    {
        name: '🥷 Stalker',
        description: 'Quick on their feet, aiming to end fights as soon as they begin.',
        bonusTo: 'Attack and Speed',
        skill: 'When landing a Critical Hit, a Stalker steals Energy from the enemy.'
    },
    {
        name: '🪖 Fighter',
        description: 'An all-round warrior whose forte is surviving on the battlefield while making sure the enemy doesn\'t.',
        bonusTo: 'Attack and Defense',
        skill: 'When using an item against a single enemy, a Fighter attacks as well.'
    },
    {
        name: '🧙 Channeler',
        description: 'An Otherworlds enthusiast who acts as a link between the two worlds.',
        bonusTo: 'Energy and Aura',
        skill: 'A Channeler gains 1 Energy per round.'
    },
    {
        name: '🧑‍🎤 Raver',
        description: 'A charismatic idol who gives an otherworldly twist to their parties.',
        bonusTo: 'Energy and Fate',
        skill: 'When Inspiring, there is a chance to swindle items or money away from an enemy.'
    },
    {
        name: '🗣 Speaker',
        description: 'A madman whose words are imbued with the power of the Otherworlds.',
        bonusTo: 'Aura and Fate',
        skill: 'When Inspiring, there is a chance to draw Energy from the Otherworlds.'
    },
    {
        name: '🧑‍⚕ Healer',
        description: 'A good soul whose purpose is to help others by preventing and healing damage.',
        bonusTo: 'Defense and Connection',
        skill: 'On a successful defense, a Healer heals the defended.'
    }
];

const roleBonus:number = 20;

let rolesIntroText:string = `Every Role has a Skill and a Bonus in two derived stats.\n`;

roles.forEach((role) => {
    const roleToAppend = `\n<b>${role.name.toUpperCase()}</b>\n\n${roleBonus}% bonus to ${role.bonusTo}\n\n${role.description}\n\n<b>Skill:</b> ${role.skill}\n`;

    rolesIntroText += roleToAppend;   
});

export { roles, roleBonus, rolesIntroText };