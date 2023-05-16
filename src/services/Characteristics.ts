import React, { useState } from 'react';
import { ICharacteristic, ICharacteristicWithSubs, defaultCharacteristics, indirectCharacteristics } from './config';

export interface ILoadCharacteristics { 
    0: ICharacteristicWithSubs[],
    1: ICharacteristic[],
}

export const useCharacteristics = () => {
    const [mutableCharacteristics, setMutableCharacteristics] = useState(defaultCharacteristics);
    const [immutableCharacteristics, setImmutableCharacteristics] = useState(indirectCharacteristics);

    const upMutableCharacteristic = (id: number) => {        
        setMutableCharacteristics(mutableCharacteristics.map((char: ICharacteristicWithSubs) => {
            if (char.id === id) {
                _upImmutableCharacteristics(char.subscribersIdx)
                return {...char, state: char.state + 1}
            }
            return char
        }))
    }

    const downMutableCharacteristic = (id: number) => {
        setMutableCharacteristics(mutableCharacteristics.map((char: ICharacteristicWithSubs) => {
            if ((char.id === id) && (char.state > 0)) {
                _downImmutableCharacteristics(char.subscribersIdx)
                return {...char, state: char.state - 1}
            }
            return char
        }))
    }

    const _upImmutableCharacteristics = (idxs : number[]) => {
        setImmutableCharacteristics(immutableCharacteristics.map((char: ICharacteristic) => {
            if ( idxs.includes(char.id) ) {
                return {...char, state: char.state + 1}
            }
            return char
        }))
    }

    const _downImmutableCharacteristics = (idxs : number[]) => {
        setImmutableCharacteristics(immutableCharacteristics.map((char: ICharacteristic) => {
            if ( (idxs.includes(char.id)) && (char.state > 0) ) {
                return {...char, state: char.state - 1}
            }
            return char
        }))
    }

    const takeDamage = (damage: number): boolean => {
        if (immutableCharacteristics[0].state > 0) {
            console.log(`Вы получили ${damage} ед. урона`);
            _downImmutableCharacteristics([1]);
            return true; 
        }
        return false;
    }

    const loadCharacteristics = (chars: ILoadCharacteristics) => {
        setMutableCharacteristics(chars[0]);
        setImmutableCharacteristics(chars[1]);
    }

    return { 
        mutableCharacteristics, 
        immutableCharacteristics,
        upMutableCharacteristic,
        downMutableCharacteristic,
        takeDamage,
        loadCharacteristics
    };
}