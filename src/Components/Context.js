import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [input, setInput] = useState({email: "" , password: ""})
    const [token,setToken] = useState({})
    const [data, setData] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

  

    return <AppContext.Provider value={{
        input, setInput,
        token, setToken,
        data, setData,
        isModalOpen, setIsModalOpen
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }