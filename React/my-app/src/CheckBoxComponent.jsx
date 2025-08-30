import React, { useContext } from 'react'
import { CheckBoxContext } from './CheckBoxProvider'

const CheckBoxComponent = () => {
    const {isChecked, toggleCheck} = useContext(CheckBoxContext)
  return (
    <div>
        <input type="checkbox" checked={isChecked} />
        <button onClick={toggleCheck}>
            Toggle Check Box
        </button>
      
    </div>
  )
}

export default CheckBoxComponent
