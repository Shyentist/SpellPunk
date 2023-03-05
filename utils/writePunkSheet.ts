export const writePunkSheet = async (punk) => {
    let { race, role, progress } = punk;

    // Pool together all the skills from different sources
    let skills = [race.skill, role.skill];

    // Calculate the main stats
    let body = 10*race.bodyMod+progress.bodyMod;
    let mind = 10*race.mindMod+progress.mindMod;
    let soul = 10*race.soulMod+progress.soulMod;

    // Calculate the maximum morale
    let morale = body + mind + soul;

    // Calculate the derived stats for body
    let attack = body * role.attackMod;
    let defense = body * role.defenseMod;
    let prowess = body * role.prowessMod;

    // Calculate the derived stats for mind
    let speed = mind * role.speedMod;
    let craft = mind * role.craftMod;
    let energy = mind * role.energyMod;

    // Calculate the derived stats for soul
    let aura = soul * role.auraMod;
    let connection = soul * role.connectionMod;
    let fate = soul * role.fateMod;
    
    race = race.name.split(" ")[0];
    role = role.name.split(" ")[0];

    const sheet = {
        race: race,
        role: role,
        body: body,
        mind: mind,
        soul: soul,
        morale: morale,
        attack: attack,
        defense: defense,
        prowess: prowess,
        speed: speed,
        craft: craft,
        energy: energy,
        aura: aura,
        connection: connection,
        fate: fate,
        skills: skills
    }

    return sheet;
}