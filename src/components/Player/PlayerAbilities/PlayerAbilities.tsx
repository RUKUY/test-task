import { IAbility } from '../../../hooks/Abilities/config';
import PlayerAbilitiesItems from './PlayerAbilitiesItems';
import { ICharacteristic } from '../../../hooks/Characteristics/config';

export interface IPlayerAbilitiesProps {
  abilities: IAbility[]
  castAbility: (id: number, characteristics: ICharacteristic[]) => void

  characteristics: ICharacteristic[] 
}

export const PlayerAbilities = (props: IPlayerAbilitiesProps) => {
  return (
      <div className='content scrolled'>

        <PlayerAbilitiesItems 
          abilities={props.abilities}
          castAbility={props.castAbility}
          characteristics={props.characteristics}
        />
      </div>
  );
}
