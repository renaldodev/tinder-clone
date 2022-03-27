import Image from 'next/image'
import { useContext } from 'react'
import {IoIosNotifications} from 'react-icons/io'
import { tinderContext } from '../../context/TinderContext'
import ProfilePic from '../../img/profile.png'
import TinderLogo from '../../img/tinder-1.svg'

const  style={
    container:`p-3 bg-white flex justify-between items-center`,
    profile:`rounded-full object-cover`,
    logo:`object-contain`,
    notificationIcon:`text-3xl text-gray-400 cursor-pointer`,
    notification:`h-2 w-2 rounded-full bg-red-600 -top-2 right-2 relative`,    
}

export default function CardHeader() {    
    const {currentUser} =useContext(tinderContext)
    return(
        <div className={style.container}>
            <Image src={currentUser?currentUser?.imageUrl:ProfilePic} alt="profile" height={40} width={40} className={style.profile}/>
            <Image src={TinderLogo} alt="tinder logo" height={40} width={200} className={style.logo}/>
          
          <div className='flex items-center'>
          <IoIosNotifications className={style.notificationIcon}/> 
          <div className={style.notification}/>
          </div>
        </div>
    )
}