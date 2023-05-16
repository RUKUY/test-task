import React, { useState } from 'react'
import PlayerCharacteristicsItem from './PlayerCharacteristicsItem'
import { ICharacteristic } from '../../../../services/config'

interface IPlayerCharacteristicsItemsProps {
  characteristics: ICharacteristic[],
  upMutableCharacteristic: (id: number) => void
  downMutableCharacteristic: (id: number) => void

  isEditing: boolean
}

const PlayerCharacteristicsItems = (props: IPlayerCharacteristicsItemsProps) => {

  return (
    <div className='items mut'>
      {
        props.characteristics.map((elem) : JSX.Element => {
          return (
            <PlayerCharacteristicsItem 
              key={elem.name}
              characteristic={elem}
              upMutableCharacteristic={props.upMutableCharacteristic}
              downMutableCharacteristic={props.downMutableCharacteristic}
              isEditing={props.isEditing}
            />
          )
        })
      }
    </div>
  )
}

export default PlayerCharacteristicsItems