import React ,{createContext,useState} from 'react';
type Props={
    children: React.ReactNode
}

type ContextType={}


export default function TinderProvider({children}:Props) {
  const tinderContext = createContext({} as ContextType);
  const [cardDate,setCardDate] = useState([]);
  const [currentWalletAddress, setCurrentWalletAddress] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  return(
    <tinderContext.Provider value={tinderContext}>
        {children}
    </tinderContext.Provider>
  )
}