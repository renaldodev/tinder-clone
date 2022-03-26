import Image from 'next/image'
import { useState } from 'react'
import { FaGlobe } from 'react-icons/fa'
import Logo from '../img/tinder-icon.svg'

const style = {
  container: `h-24 w-screen max-w-6xl flex justify-between items-center px-[40px]  my-0 mx-auto`,
  leftContainer: `flex gap-10`,
  rightContainer: `flex gap-10 items-center`,
  link: `decoration-none text-white font-bold text-md`,
  nav: `flex gap-8 items-center`,
  logo: `font-bold text-4xl text-white flex items-center`,
  langButton: `flex gap-2 items-center uppercase text-white text-sm transition duration-[300ms] ease-out hover:text-red-600`,
  loginButton: `px-4 py-2 bg-white text-red-600 text-sm rounded-md`,
  walletAddress: `p-2 border border-gray-400 rounded-lg text-white text-[12px]`,
}

export default function Header() {
  const [waletAddress, setWalletAddress] = useState('0xff6d6ffgggd6')
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <a href="#" className={style.logo}>
          <Image
            src={Logo}
            width={45}
            height={45}
            alt="Tinder logo with fire format"
          />
          Tinder
        </a>
        <nav className={style.nav}>
          <a href="#" className={style.link}>
            Products
          </a>
          <a href="#" className={style.link}>
            Learn
          </a>
          <a href="#" className={style.link}>
            Safety
          </a>
          <a href="#" className={style.link}>
            Support
          </a>
          <a href="#" className={style.link}>
            Download
          </a>
        </nav>
      </div>
      <div className={style.rightContainer}>
        {waletAddress ? (
          <>
            <span className={style.walletAddress}>{waletAddress}</span>
            <button className={style.loginButton}>Logout</button>
          </>
        ) : (
          <>
            <button className={style.langButton}>
              <FaGlobe />
              English
            </button>
            <button className={style.loginButton}>Login</button>
          </>
        )}
      </div>
    </div>
  )
}
