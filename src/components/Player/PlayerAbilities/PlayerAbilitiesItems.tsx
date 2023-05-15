import React, { useState } from 'react'
import PlayerAbilitiesItem from './PlayerAbilitiesItem'
import { IAbility } from '../../../services/Abilities/config'
import { ICharacteristic } from '../../../services/config'

interface IPlayerAbilitiesItemsProps {
  abilities: IAbility[]
  castAbility: (id: number, characteristics: ICharacteristic[]) => void

  characteristics: ICharacteristic[]
}

const PlayerAbilitiesItems = (props: IPlayerAbilitiesItemsProps) => {
    
  return (
    <div className="items skills">
      {
        props.abilities.map((elem) : JSX.Element => {
          return (
            <PlayerAbilitiesItem 
              key={elem.name}
              ability={ elem } 
              castAbility={props.castAbility}
              characteristics={props.characteristics}
            />
          )
        })
      }
    </div>
  )
}

export default PlayerAbilitiesItems