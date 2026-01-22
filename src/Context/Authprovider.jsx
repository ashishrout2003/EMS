import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getlocalstorage, setlocalstorage } from '../Utils/localstorage'
export const Authcontext = createContext()

const Authprovider = ({ children }) => {
// localStorage.clear()

    const [userData, setuserData] = useState(null)

    useEffect(() => {
      setlocalstorage()
    const {employees} = getlocalstorage()
    setuserData(employees)
    }, [])
    
  return (
    <div>
        <Authcontext.Provider value={[userData,setuserData]}>
            {children}
        </Authcontext.Provider>
    </div>
  )
}

export default Authprovider