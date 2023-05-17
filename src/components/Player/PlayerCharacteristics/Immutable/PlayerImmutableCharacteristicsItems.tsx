import PlayerImmutableCharacteristicsItem from './PlayerImmutableCharacteristicsItem'
import { ICharacteristic } from '../../../../hooks/Characteristics/config'


interface IPlayerImmutableCharacteristicsItemsProps {
  characteristics: ICharacteristic[]
}

const PlayerImmutableCharacteristicsItems = (props: IPlayerImmutableCharacteristicsItemsProps) => {
    
  return (
    <div className="items immut">
      {
        props.characteristics.map((elem) : JSX.Element => {
          return (
            <PlayerImmutableCharacteristicsItem 
              key={elem.name}
              characteristic={ elem }
            />
          )
        })
      }
    </div>
  )
}

export default PlayerImmutableCharacteristicsItems