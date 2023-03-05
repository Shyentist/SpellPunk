type race = {
    name:string, 
    description:string, 
    bonusTo:string
};

const races:race[] = [
    {
        name: '🧑 Human',
        description: 'A Human is not just a human anymore. Ever since the Connection, many started developing some kind of ability or power, without straying too far away from their humanity. Ingenious, curious, and resourceful, humans are fast-learners who leverage their many experiences to flexibly overcome difficulties',
        bonusTo:'Experience Points Gained'
    },
    {
        name: '🩸 Halve',
        description: 'A Halve is a person who is only half human. The other half? Anything with a similar life-cycle! Half-Orcs, Half-Elves, Half-Beasts, etc. Half-Bloods are usually more in touch with nature, have stronger bodies and instincts, and enjoy a more flexible perspective on life',
        bonusTo:'Body and Soul'
    },
    {
        name: '💉 Synth',
        description: 'A Synth is any artificial, organic, living replica of a human. Similarly to a modern Frankenstein, or to a mutant created in a lab, Synths are engineered to overcome human weaknesses, with bodies and minds that tend to be sharper than those of the average human',
        bonusTo:'Body and Mind'
    },
    {
        name: '👤 Shade',
        description: 'A Shade is any person whose life is somewhat intertwined with entities beyond the human world. Touched by the Otherworlds, their heritages and powers come from Djinns, Spectres, Fairies, Mermaids, etc. Shades tend to be more aware, both of the world and of themselves',
        bonusTo:'Mind and Soul'
    }
];

const racialBonus:number = 20;

let racesIntroText:string = 'Humans developed Supernatural abilities, and their offspring seldom manifested a closer contact to the Otherworlds than their parents, giving rise to a whole new concept of Races which, as of now, we aggregate into a few thematic groups.\n\nAll races have the looks of a human, at most with accentuated features, such as uncommonly hairy, eyes of a peculiar colour, particularly sharp canines, slightly off skin complexion, etc.\n' 

races.forEach((race) => {
    const raceToAppend = `\n<b>${race.name.toUpperCase()}</b>\n\n${racialBonus}% bonus to ${race.bonusTo}\n\n${race.description}.\n`;

    racesIntroText += raceToAppend;   
});

export { races, racialBonus, racesIntroText };