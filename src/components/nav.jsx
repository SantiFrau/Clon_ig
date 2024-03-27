import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import TuneIcon from '@mui/icons-material/Tune';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
export default function Nav () {
    const reload = ()=>{
        window.location.reload();
        window.scrollTo(0, 0);
    }

    const [menu,setMenu] = useState(false);

    return(
        <>
        
        <div className={`h-screen text-white w-1/5 hidden  ${(menu) ? "lg:hidden" : "lg:block"}  `}></div>
         <nav className={`hidden  ${(menu) ? "lg:hidden" : "lg:flex"} fixed h-screen bg-black text-white flex flex-col justify-between w-1/5 border-zinc-600 border-r `}>
         <h3 className="hover:text-zinc-500 cursor-pointer m-5 mt-7 m-5 text-xl font-bold" onClick={reload}>INSTAGRAM</h3>
          <ul >
           
            <li onClick={reload} className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"><HomeIcon></HomeIcon> <p>Home</p></li>
            <li onClick={()=>{setMenu(!menu)}} className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"> <SearchIcon></SearchIcon> <p>Search</p></li>
            <li className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"><ChatIcon></ChatIcon> <p>messages</p></li>
            <li className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"> <img src="perfil.webp" className='w-8 rounded-full object-cover' style={{aspectRatio:1/1}} alt="" /><p>Profile</p></li>
          </ul>
          <h4 className="cursor-pointer m-5 p-3 flex flex-row gap-2"> <TuneIcon></TuneIcon> <p>More</p></h4>
         </nav>



         <div className={`h-screen text-white w10 block ${(menu) ? "lg:block" : "lg:hidden"} `}></div>
         <nav className={`flex  ${(menu) ? "lg:flex" : "lg:hidden"}  fixed h-screen bg-black text-white  flex-col justify-between w10 border-zinc-600 border-r items-center  `}>
         <div className="hover:text-zinc-500 cursor-pointer m-5 mt-7 m-5 text-xl font-bold" onClick={reload}><InstagramIcon></InstagramIcon></div>
          <ul className='flex flex-col items-center justify-center' >
           
            <li onClick={reload} className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"><HomeIcon></HomeIcon> </li>
            <li onClick={()=>{setMenu(!menu)}}  className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"> <SearchIcon></SearchIcon> </li>
            <li className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"><ChatIcon></ChatIcon> </li>
            <li className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"> <img src="perfil.webp" className='w-8 rounded-full object-cover' style={{aspectRatio:1/1}} alt="" /></li>
          </ul>
          <h4 className="cursor-pointer m-5 p-3 flex flex-row gap-2"> <TuneIcon></TuneIcon></h4>
         </nav>
         
        </>
    )
}