import {Card,Header} from '../components';
const style={
  wrapper:`w-full h-full min-h-screen flex flex-col bg-[#222229]`,
  cardContainer:`flex flex-col items-center justify-center`
}

export default function Home(){
  return (
    <div className={style.wrapper}>
      <Header/>
      <div className={style.cardContainer}>
        <Card/>
      </div>
    </div>
  )
}