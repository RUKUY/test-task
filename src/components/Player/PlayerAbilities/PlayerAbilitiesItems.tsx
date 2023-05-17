import PlayerAbilitiesItem from './PlayerAbilitiesItem'
import { IAbility } from '../../../hooks/Abilities/config'
import { ICharacteristic } from '../../../hooks/Characteristics/config'

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