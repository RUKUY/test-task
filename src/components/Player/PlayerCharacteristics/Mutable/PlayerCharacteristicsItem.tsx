import { ICharacteristic } from '../../../../hooks/Characteristics/config'

interface PlayerCharacteristicsItemProps {
  characteristic: ICharacteristic,
  upMutableCharacteristic: (id: number) => void
  downMutableCharacteristic: (id: number) => void

  isEditing: boolean,
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
        <span>{ props.characteristic.name }:</span>
      </div>
      
      <div className="right-side" style={{ justifyContent: (props.isEditing) ? '' : 'end' }}>
        <button type="button" onClick={minusCharacteristic} style={{ display: (props.isEditing) ? '' : 'none'}}>
          <i className="fa-solid fa-minus"></i>
        </button>

        <span className="text-dark-red" style={{ margin: '0px 5px'}}>
            { props.characteristic.state }
          </span>

        <button type="button" onClick={plusCharacteristic} style={{ display: (props.isEditing) ? '' : 'none'}}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  )
}

export default PlayerCharacteristicsItem