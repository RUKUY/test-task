
export interface ICharacteristic {
    id: number,
    name: string,
    state: number,
}

export interface ICharacteristicWithSubs extends ICharacteristic {
    subscribersIdx: number[],
}

export const defaultCharacteristics: ICharacteristicWithSubs[] = [
    {
        id: 1,
        name: "Сила",
        state: 0,
        subscribersIdx: [1]
    },
    {
        id: 2,
        name: "Ловкость",
        state: 0,
        subscribersIdx: [2, 3]
    },
    {
        id: 3,
        name: "Интелект",
        state: 0,
        subscribersIdx: [3]
    },
    {
        id: 4,
        name: "Харизма",
        state: 0,
        subscribersIdx: []
    },
]

export const indirectCharacteristics: ICharacteristic[] = [
    {
        id: 1,
        name: "Жизненная сила",
        state: 3,
    },
    {
        id: 2,
        name: "Уклонение",
        state: 10,
    },
    {
        id: 3,
        name: "Энергичность",
        state: 0,
    },
]
