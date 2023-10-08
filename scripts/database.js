const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Sweety-Pie",
            power: "Night-eating",
        },
        {
            id: 2,
            name: "Deli-Slice",
            power: "Accuracy",
        },
        {
            id: 3,
            name: "Grandpa",
            power: "Vape Invisiblity",
        },
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}