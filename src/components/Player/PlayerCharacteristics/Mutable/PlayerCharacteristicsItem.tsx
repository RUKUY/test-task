import React, { useState, useEffect } from 'react'
import { ICharacteristic } from '../../../../services/config'


interface PlayerCharacteristicsItemProps {
  characteristic: ICharacteristic,
  upMutableCharacteristic: (id: number) => void
  downMutableCharacteristic: (id: number) => void

  isEditing?: boolean,
}

const PlayerCharacteristicsItem = (props: PlayerCharacteristicsItemProps) => {

  const plusCharacteristic = () => {
    props.upMutableCharacteristic(props.characteristic.id)
  }
  const minusCharacteristic = () => {
    props.downMutableCharacteristic(props.characteristic.id)
  }

  return (
    <div className='item'>
      <div className="left-side">
        {/* <img className="icon" src="./assets/img/strength.png" alt="" srcset=""> */}
        <span>{ props.characteristic.name }:</span>
      </div>
      <div className="right-side">
        <button type="button" onClick={minusCharacteristic}>-</button>
        <span style={{ margin: '0px 5px' }}>{ props.characteristic.state }</span>
        <button type="button" onClick={plusCharacteristic}>+</button>
      </div>
    </div>
  )
}

export default PlayerCharacteristicsItem