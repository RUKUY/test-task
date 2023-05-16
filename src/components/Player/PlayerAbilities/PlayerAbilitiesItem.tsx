import React, { useState } from 'react'
import { IAbility, maxAbilityLevel, useToLevelUp } from '../../../services/Abilities/config'
import { ICharacteristic } from '../../../services/config'


interface IPlayerAbilitiesItemProps {
    ability: IAbility
    castAbility: (id: number, characteristics: ICharacteristic[]) => void
    
    characteristics: ICharacteristic[]
}

const PlayerAbilitiesItem = (props: IPlayerAbilitiesItemProps) => {
  let image = require('../../../assets/icons/' + props.ability.icon)
  let connectedCharacteristic : ICharacteristic = props.characteristics.find(el => el.id === props.ability.dependsOn)!;

  const handleClickAbility = () => {
    props.castAbility(props.ability.id, props.characteristics)
  }
    
  return (
    <div className="item" onClick={handleClickAbility}>
      <div className="left-side">
        <div className='img-holder'>
          <img src={image} alt="" />
        </div>
        <div className='skill-info'>
          <p className='skill-info-title'>{ props.ability.name }</p>
          <p className='skill-info-helptext'>
            {
              (props.ability.level === maxAbilityLevel) ? 
                'Max' : 
                (props.ability.level < connectedCharacteristic.state) ? 
                  `Кликов до следующего уровня: ${ useToLevelUp[props.ability.level + 1] - props.ability.expirience}` :
                  `Параметр ${connectedCharacteristic.name} не достаточно прокачен` 
                
            }
            </p>
        </div>
      </div>
      <div className="right-side">
        <span>Ур. {props.ability.level}</span>
      </div>
    </div>
  )
}

export default PlayerAbilitiesItem