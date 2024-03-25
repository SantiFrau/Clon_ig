import { users } from '../data/users';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';


export default function Historias (){
    const [scrollPosition , setScrollPosition] = useState(0)

    const scrollToLeft = () => {
      setScrollPosition(scrollPosition + 4 *100); 
    };
    const scrollToRight = () => {
      setScrollPosition(scrollPosition - 4 *100); 
    };

    return(
        <section className='relative flex flex-row w-full text-white  p-5 px-7 h-40' >
              <div onClick={scrollToLeft} className={`z-10 absolute top-8 left-0 hover:bg-zinc-600 rounded-full p-2 hover:bg-opacity-40 ${scrollPosition==0 ? "hidden" : "block"} `}>
                <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
              </div>
              <div className='flex flex-row gap-10 overflow-hidden w-full' >
              {
              users.map((user,i)=>{
                if(user.history){
                  const borde = (user.history_view) ? "border-2 border-zinc-800" : "gradient-border" 
                
                return (
                  <div key={i} className='flex flex-col gap-1 items-center w-16 transition-h' style={{ transform: `translateX(${scrollPosition }%)` }}>
                     <img src={user.img} className={`w-18 rounded-full ${borde} p-1 ` } alt="" />
                     <p className='truncate w-20 text-sm'>{user.username}</p>
                  </div>
                )}
                return
              })
              }
              </div>
             <div onClick={scrollToRight} className={`z-10 absolute top-8 right-0 hover:bg-zinc-600 rounded-full p-2 hover:bg-opacity-40 ${(scrollPosition<=(-users.length*100)) ? "hidden" : "block"}`}>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </div>
             </section>
    )
}