import React from 'react';
import PlayerCharacteristicsItems from './Mutable/PlayerCharacteristicsItems';
import PlayerImmutableCharacteristicsItems from './Immutable/PlayerImmutableCharacteristicsItems';
import { ICharacteristic } from '../../../services/config';

export interface IPlayerCharacteristicsProps {
  mutableCharacteristics: ICharacteristic[], 
  upMutableCharacteristic: (id: number) => void
  downMutableCharacteristic: (id: number) => void
  
  immutableCharacteristics: ICharacteristic[],
}

export const PlayerCharacteristics = (props: IPlayerCharacteristicsProps) => {

  return (
    <div className="content">
      <PlayerCharacteristicsItems 
        characteristics={props.mutableCharacteristics}
        upMutableCharacteristic={props.upMutableCharacteristic}
        downMutableCharacteristic={props.downMutableCharacteristic}
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
