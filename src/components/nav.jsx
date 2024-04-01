import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import TuneIcon from '@mui/icons-material/Tune';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import Buscador from './buscador';
import { Link } from "react-router-dom";

export default function Nav () {
    const reload = ()=>{
        return <Navigate to="/Clon_ig/"></Navigate>
    }

    const [menu,setMenu] = useState(false);
    const [Mensajes,setMensajes]= useState(false);

    const handdleClickBuscar =()=>{
      setMenu(!menu)
    }
    return(
        <>
        
        <div className={`h-screen text-white w-1/5 hidden  ${(menu || Mensajes) ? "lg:hidden" : "lg:block"}  `}></div>
         <nav className={`hidden  ${(menu || Mensajes) ? "lg:hidden" : "lg:flex"} fixed h-screen bg-black text-white flex flex-col justify-between w-1/5 border-zinc-600 border-r `}>
         <NavLink onClick={()=>{setMensajes(false)}} to="/Clon_ig/"><h3 className="hover:text-zinc-500 cursor-pointer m-5 mt-7 m-5 text-xl font-bold" >INSTAGRAM</h3></NavLink>
          <ul >
           
            <NavLink to="/Clon_ig/" onClick={()=>{setMensajes(false)}}><li  className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"><HomeIcon></HomeIcon> <p>Home</p></li></NavLink> 
            <li onClick={handdleClickBuscar} className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"> <SearchIcon></SearchIcon> <p>Search</p></li>
            <NavLink to="/Clon_ig/mensajes" onClick={()=>{setMensajes(!Mensajes)
                                            }}>
            <li  className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"><ChatIcon></ChatIcon> <p>messages</p></li>
            </NavLink>
            <li className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"> <img src="perfil.webp" className='w-8 rounded-full object-cover' style={{aspectRatio:1/1}} alt="" /><p>Profile</p></li>
          </ul>
          <h4 className="cursor-pointer m-5 p-3 flex flex-row gap-2"> <TuneIcon></TuneIcon> <p>More</p></h4>
         </nav>
        

          
         <div className={`h-screen text-white w10 md:block hidden ${(menu || Mensajes) ? "lg:block" : "lg:hidden"} `}></div>
         <nav className={`md:flex hidden  ${(menu || Mensajes) ? "lg:flex" : "lg:hidden"}  fixed h-screen bg-black text-white  flex-col justify-between w10 border-zinc-600 border-r items-center  `}>
         <NavLink to="/Clon_ig/" onClick={()=>{setMensajes(false)}}><div className="hover:text-zinc-500 cursor-pointer m-5 mt-7 m-5 text-xl font-bold"><InstagramIcon></InstagramIcon></div></NavLink>
          <ul className='flex flex-col items-center justify-center' >
           
             <NavLink to="/Clon_ig/" onClick={()=>{setMensajes(false)}}><li className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"><HomeIcon></HomeIcon> </li></NavLink>
            <li onClick={()=>{setMenu(!menu)}}  className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"> <SearchIcon></SearchIcon> </li>
            <NavLink to="/Clon_ig/mensajes"><li className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"><ChatIcon></ChatIcon> </li></NavLink>
            <li className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"> <img src="perfil.webp" className='w-8 rounded-full object-cover' style={{aspectRatio:1/1}} alt="" /></li>
          </ul>
          <h4 className="cursor-pointer m-5 p-3 flex flex-row gap-2"> <TuneIcon></TuneIcon></h4>
         </nav>
         {
          (menu) ? <Buscador setMenu={setMenu}></Buscador> : null
         }
         

         
         <div className={`${(menu || Mensajes) ? "hidden" : "block"} relative md:hidden hover:text-zinc-500 cursor-pointer text-xl font-bold h-10 bg-black z-20 p-3`} onClick={reload}>
          <NavLink to="/Clon_ig/" onClick={()=>{setMensajes(false)}}><div className='fixed w-full z-20 bg-black h-10 p-3'>Instagram</div></NavLink></div>

         <nav className={`md:hidden flex fixed bottom-0 h-10 w-full bg-black text-white border-zinc-600 border-r z-20 justify-center p-2`}>
          <ul className='flex flex-row items-center justify-center gap-3 bg-black' >
           
             <NavLink to="/Clon_ig/" onClick={()=>{setMensajes(false)}}><li className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"><HomeIcon></HomeIcon> </li></NavLink>
            <li onClick={()=>{setMenu(!menu)}}  className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"> <SearchIcon></SearchIcon> </li>
             <NavLink to="/Clon_ig/mensajes"><li className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"><ChatIcon></ChatIcon> </li></NavLink>
            <li className="cursor-pointer mx-5 p-3 rounded-lg hover:bg-zinc-800 flex flex-row gap-2"> <img src="perfil.webp" className='w-6 rounded-full object-cover' style={{aspectRatio:1/1}} alt="" /></li>
          </ul>
         </nav>
        </>
    )
}