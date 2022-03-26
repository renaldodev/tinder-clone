import { FaUndoAlt } from 'react-icons/fa'
import { AiOutlineClose, AiFillStar } from 'react-icons/ai'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import TinderCard from 'react-tinder-card'
const style = {
  container: `w-full h-full overflow-hidden bg-no-repeat bg-cover bg-center relative px-8 py-4`,
  tinderCardContainer: `w-full h-full absolute`,
  space: `flex justify-between items-end mb-6 h-3/4`,
  name: `flex text-xl text-white font-extrabold items-center -mb-4`,
  age: `ml-4 text-xl font-semibold `,
  walletAddress: `mb-2 text-xl font-bold text-white`,
  reactionContainer: `flex justify-between h-full w-full`,
  buttonContainer: `flex rounded-full h-11 w-11 justify-center items-center border-2 cursor-pointer`,
  buttonSymbol: `text-2xl`,
  backColor: `border-white text-white`,
  xColors: `border-red-600 text-red-600`,
  starColors: `border-blue-400 text-blue-400`,
  LigtningColors: `border-purple-500 text-purple-500`,
}

const onSwipe = (direction: 'left' | 'right' | 'up' | 'down') => {
  if (direction === 'right') {
    // handleRightSwipe(card,currentAccount)
  }
}

export default function TinderCardItem() {
  return (
    <TinderCard
      className={style.tinderCardContainer}
      preventSwipe={['up', 'down']}
      onSwipe={onSwipe}
    >
      <div className={style.container} style={{backgroundImage:"url('https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')"}}>
        <div className={style.space}>
          <div className={style.name}>
            Lance
            <span className={style.age}>99</span>
          </div>
        </div>
        <div className={style.walletAddress}>0x...456</div>
        <div className={style.reactionContainer}>
          <div className={`${style.backColor} ${style.buttonContainer}`}>
            <FaUndoAlt className={`${style.backColor} ${style.buttonSymbol}`} />
          </div>
          <div className={`${style.starColors} ${style.buttonContainer}`}>
            <AiFillStar
              className={`${style.buttonSymbol}  ${style.starColors}`}
            />
          </div>
          <div className={` ${style.LigtningColors} ${style.buttonContainer}`}>
            <BsFillLightningChargeFill
              className={`${style.buttonSymbol} ${style.LigtningColors}`}
            />
          </div>
          <div className={`${style.xColors} ${style.buttonContainer}`}>
            <AiOutlineClose
              className={`${style.buttonSymbol} ${style.xColors}`}
            />
          </div>
        </div>
      </div>
    </TinderCard>
  )
}
