import React, { useState } from 'react'
import { IAbility } from '../../../services/Abilities/config'
import { ICharacteristic } from '../../../services/config'

interface IPlayerAbilitiesItemProps {
    ability: IAbility
    castAbility: (id: number, characteristics: ICharacteristic[]) => void
    
    characteristics: ICharacteristic[]
}

const PlayerAbilitiesItem = (props: IPlayerAbilitiesItemProps) => {

  const handleClickAbility = () => {
    props.castAbility(props.ability.id, props.characteristics)
  }
    
  return (
    <div className="item" onClick={handleClickAbility}>
      <div className="left-side">
        <div className='img-holder'></div>
        <span>{props.ability.name}</span>
      </div>
      <div className="right-side">
        <span>Ур. {props.ability.level}</span>
      </div>
    </div>
  )
}

export default PlayerAbilitiesItem