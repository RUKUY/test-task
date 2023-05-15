
export interface IAbility {
    id: number,
    name: string,
    level: number,
    dependsOn: number,
    expirience: number, 
}

export interface IUseToLevelUp {
    [key: number] : number 
}

export const maxAbilityLevel: number = 5

export const useToLevelUp: IUseToLevelUp = {
    1 : 5,
    2 : 5,
    3 : 5,
    4 : 5,
    5 : 5,
}

export const defaultAbilities: IAbility[] = [
    {
        id: 1,
        name: "Атака",
        level: 0,
        dependsOn: 1,
        expirience: 0,
    },
    {
        id: 2,
        name: "Стелс",
        level: 0,
        dependsOn: 2,
        expirience: 0,
    },
    {
        id: 3,
        name: "Стрельба из лука",
        level: 0,
        dependsOn: 2,
        expirience: 0,
    },
    {
        id: 4,
        name: "Обучаемость",
        level: 0,
        dependsOn: 3,
        expirience: 0,
    },
    {
        id: 5,
        name: "Выживание",
        level: 0,
        dependsOn: 3,
        expirience: 0,
    },
    {
        id: 6,
        name: "Медицина",
        level: 0,
        dependsOn: 3,
        expirience: 0,
    },
    {
        id: 7,
        name: "Запугивание",
        level: 0,
        dependsOn: 4,
        expirience: 0,
    },
    {
        id: 8,
        name: "Проницательность",
        level: 0,
        dependsOn: 4,
        expirience: 0,
    },
    {
        id: 9,
        name: "Внешний вид",
        level: 0,
        dependsOn: 4,
        expirience: 0,
    },
    {
        id: 10,
        name: "Манипулирование",
        level: 0,
        dependsOn: 4,
        expirience: 0,
    }
]


