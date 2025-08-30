import React, { createContext, useState } from 'react'

export const CheckBoxContext = createContext();


const CheckBoxProvider = ({children}) => {
    const [isChecked, setChecked] = useState(false)

    const toggleCheck = () => {
        setChecked((prev) => !prev)
    }

  return (
    <CheckBoxContext.Provider value={{isChecked, toggleCheck}}>
      {children}
    </CheckBoxContext.Provider>
  )
}

export default CheckBoxProvider
