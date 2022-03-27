import { useContext } from 'react'
import {SiTinder} from 'react-icons/si'
import { tinderContext } from '../../context/TinderContext'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import TinderCardItem from './TinderCardItem'

const style = {
    container:`h-[32rem] w-[20rem] flex flex-col overflow-hidden rounded-lg `, 
    cardBody:`flex w-full relative flex-1 bg-gray-500 items-center justify-center`,
    noProfile:`flex flex-col items-center justify-center absolute`,
    swipeProfile:`w-full h-full overflow-hidden`,
    tinderLogo:`text-5xl text-red-600 mb-4`,
    noMoreText:`text-xl text-white`
}

export default function Card() {    
    const {cards}=useContext(tinderContext)
    return(
        <div className={style.container}>
            <CardHeader/>
               <div className={style.cardBody}>
                   <div className={style.noProfile}>
                      <SiTinder className={style.tinderLogo}/>
                      <p className={style.noMoreText}>No more profile in your location...</p>
                   </div>
                   <div className={style.swipeProfile}>
                       {cards.map((card:any,index)=>(
                           <TinderCardItem card={card} key={index}/>

                       ))}
                   </div>
               </div>
            <CardFooter/>
        </div>
    )
}