import React, { useState, useEffect } from 'react'
import { ICharacteristic } from '../../../../services/config'

interface IPlayerImmutableCharacteristicsItem {
    characteristic: ICharacteristic
}

const PlayerImmutableCharacteristicsItem = (props: IPlayerImmutableCharacteristicsItem) => {  

  return (
    <div className="item">
      <p>{ props.characteristic.name }</p>
      <p style={{ color: 'red' }}>{ props.characteristic.state }</p>
    </div>
  )
}

export default PlayerImmutableCharacteristicsItem