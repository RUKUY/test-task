import React, { useState } from 'react';
import { ICharacteristic, ICharacteristicWithSubs, defaultCharacteristics, indirectCharacteristics } from './config';


export const useCharacteristics = () => {
    const [mutableCharacteristics, setMutableCharacteristics] = useState(defaultCharacteristics);
    const [immutableCharacteristics, setImmutableCharacteristics] = useState(indirectCharacteristics);

    const upMutableCharacteristic = (id: number) => {        
        setMutableCharacteristics(mutableCharacteristics.map((char: ICharacteristicWithSubs) => {
            if (char.id === id) {
                _upImmutableCharacteristic(char.subscribersIdx)
                return {...char, state: char.state + 1}
            }
            return char
        }))
    }

    const downMutableCharacteristic = (id: number) => {
        setMutableCharacteristics(mutableCharacteristics.map((char: ICharacteristicWithSubs) => {
            if ((char.id === id) && (char.state > 0)) {
                _downImmutableCharacteristic(char.subscribersIdx)
                return {...char, state: char.state - 1}
            }
            return char
        }))
    }

    const _upImmutableCharacteristic = (idxs : number[]) => {
        setImmutableCharacteristics(immutableCharacteristics.map((char: ICharacteristic) => {
            if ( idxs.includes(char.id) ) {
                return {...char, state: char.state + 1}
            }
            return char
        }))
    }

    const _downImmutableCharacteristic = (idxs : number[]) => {
        setImmutableCharacteristics(immutableCharacteristics.map((char: ICharacteristic) => {
            if ( (idxs.includes(char.id)) && (char.state > 0) ) {
                return {...char, state: char.state - 1}
            }
            return char
        }))
    }

    return { 
        mutableCharacteristics, 
        immutableCharacteristics,
        upMutableCharacteristic,
        downMutableCharacteristic
    };
}