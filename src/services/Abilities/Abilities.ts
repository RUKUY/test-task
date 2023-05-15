import React, { useState } from 'react';
import { IAbility, defaultAbilities, maxAbilityLevel, useToLevelUp } from './config';
import { ICharacteristic } from '../config';


export const useAbilities = () => {
    const [abilities, setAbilities] = useState(defaultAbilities);

    const castAbility = (id: number, characteristics: ICharacteristic[]) => {
        let skill : IAbility | undefined = abilities.find((el : IAbility) => el.id === id)
        if (!!skill) {
            let depenceChar : ICharacteristic | undefined = characteristics.find((el : ICharacteristic )=> el.id === skill?.dependsOn)

            if ((!!depenceChar) && (depenceChar.state > skill.level) && (skill.expirience <= useToLevelUp[skill.level + 1])) {
                upAbility(skill)
            } 
        }
        console.log(`Способность ${skill?.name} применена`);
    }

    const upAbility = (skill : IAbility) => {
        skill.expirience++;
        if ( (skill.expirience === useToLevelUp[skill.level + 1]) && (skill.level < maxAbilityLevel) ) {
            skill.expirience = 0;
            skill.level++;
            
            console.log(`Способность ${skill.name} прокачена до ${skill.level} уровня!!!`);
        }

        setAbilities(abilities.map((el: IAbility) => {
            if (el.id === skill.id) {
                return skill;
            }
            return el;
        }))
    }

    const downAbility = (skill : IAbility) => {
        
    }

    return { 
        abilities,
        castAbility,
    };
}