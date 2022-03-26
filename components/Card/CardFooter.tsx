import {SiTinder} from 'react-icons/si'
import {MdMessage} from 'react-icons/md'
import {FaSearch,FaEthereum} from 'react-icons/fa'
const style = {
    container:`p-3 bg-white flex justify-between items-center`,
    logo:`text-2xl text-gray-400 cursor-pointer transition duration-[300ms] ease-in hover:text-red-600`,
    logoTinder:`text-2xl text-red-600 cursor-pointer`,
}


export default function CardFooter() {    
    return(
        <div className={style.container}>
        <SiTinder className={style.logoTinder}/>
        <FaSearch className={style.logo}/>
        <FaEthereum className={style.logo}/>
        <MdMessage className={style.logo}/>
        </div>
    )
}