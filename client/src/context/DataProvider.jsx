import { createContext, useState } from "react"

export const DataContext = createContext(null);

// provider hme data ka access dete h jese account setAccount

const DataProvider = ({children}) => {
    const [ account, setAccount ] = useState('');
    return (
        <DataContext.Provider value={{
            account,
            setAccount
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;