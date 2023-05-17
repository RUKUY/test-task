import { useState } from 'react';
import PlayerCharacteristicsItems from './Mutable/PlayerCharacteristicsItems';
import PlayerImmutableCharacteristicsItems from './Immutable/PlayerImmutableCharacteristicsItems';
import { ICharacteristic } from '../../../hooks/Characteristics/config';

export interface IPlayerCharacteristicsProps {
  mutableCharacteristics: ICharacteristic[], 
  upMutableCharacteristic: (id: number) => void
  downMutableCharacteristic: (id: number) => void
  
  immutableCharacteristics: ICharacteristic[],
}

export const PlayerCharacteristics = (props: IPlayerCharacteristicsProps) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="content">
      <div className="btn-container">
        {
          (isEditing) ? (
            <button className='btn small submit' onClick={() => setIsEditing(false)}>
              <i className="fa-solid fa-check"></i>
            </button>
          ) : (
            <button className='btn small transp' onClick={() => setIsEditing(true)}>
              <i className="fa-solid fa-sliders"></i>
            </button>
          )
        }
      </div>
      <PlayerCharacteristicsItems 
        characteristics={props.mutableCharacteristics}
        upMutableCharacteristic={props.upMutableCharacteristic}
        downMutableCharacteristic={props.downMutableCharacteristic}
        isEditing={isEditing}
      />
      <hr></hr>
      <PlayerImmutableCharacteristicsItems 
        characteristics={props.immutableCharacteristics}
      />
    </div>
  );
}

/* <img className="icon" src="./assets/img/running.png" alt="" srcset=""> */
/* <img className="icon" src="./assets/img/brain.png" alt="" srcset=""> */
/* <img className="icon" src="./assets/img/charisma.png"> */
