import { faker } from '@faker-js/faker'
import React, { createContext, useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'

type Props = {
  children: React.ReactNode
}

type ContextType = {
  currentUser:any,
  currentAccount:string|null,
  cards:any[],
  connectWallet: () => void
  disconnectWallet: () => void
}
export const tinderContext = createContext({} as ContextType)

export default function TinderProvider({ children }: Props) {
  const { authenticate, isAuthenticated, user, Moralis } = useMoralis()
 
  const [cardData, setCardData] = useState([])
  const [currentAccount, setCurrentAccount] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  const checkWalletConnection = () => {
    if (isAuthenticated) {
      const address = user?.get('ethAddress')
      setCurrentAccount(address)
       requestToCreateUserProfile(address,faker.name.findName());
      return
    }
    setCurrentAccount('')
  }
  const connectWallet = async () => {
    if (!isAuthenticated) {
      try {
        await authenticate({ signingMessage: 'Authentication using moralis' })
      } catch (error) {
        console.error(error)
      }
    }
  }

  const disconnectWallet = async () => {
    await Moralis.User.logOut()
    setCurrentAccount('')
  }


  const requestToCreateUserProfile=async (walletAddress:string,name:string)=>{
    try {
       await fetch('/api/createUser', {
         method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userWalletAddress:walletAddress,name
          })
       })
    } catch (error) {
      console.error(error)
    }
  };

const requestCurrentUserData=async (walletAddress:string)=>{
  try {
    const reponse=await fetch(`/api/listCurrentUserData?activeAccount=${walletAddress}`)
    const data=await reponse.json()
    setCurrentUser(data.data);
 } catch (error) {
   console.error(error)
 }
}

const requestUsersData=async (walletAddress:string)=>{
  try {
    const reponse=await fetch(`/api/listUsers?activeAccount=${walletAddress}`)
    const data=await reponse.json()
    setCardData(data.data);
 } catch (error) {
   console.error(error)
 }
}

  useEffect(()=>{
    checkWalletConnection()
    if(isAuthenticated){
      requestUsersData(user?.get('ethAddress'))
      requestCurrentUserData(user?.get('ethAddress'))
    }
  },[isAuthenticated])

  return (
    <tinderContext.Provider value={{cards:cardData,disconnectWallet,connectWallet,currentAccount,currentUser}}>
      {children}
    </tinderContext.Provider>
  )
}
