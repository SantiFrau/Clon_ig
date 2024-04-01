import { mensajes } from "../data/chats"
import { useState } from "react"
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';

export default function Mensajes(){

    const [msg,setMsg] = useState(false)
    return (
        <div className="w-full h-screen flex flex-row overflow-none mb-12 md:mb-0">
        <div className=" mb-10 md:mb-0 w-1/4 h-screen flex flex-col gap-2 py-5 overflow-auto">
          <h3 className="font-bold text-lg py-3">Santiago Frau</h3>
          <p className="py-2">Mensajes</p>
          {
            mensajes.map((chat,i)=>{
                return(
                    <div className="flex flex-row gap-2 items-center p-2 hover:bg-zinc-800" onClick={()=>{setMsg(chat)}}>
                     <img className="w-10 rounded-full" src="https://imgs.search.brave.com/daq6W-1E3byUT6xxra3KAwC2JiWCQmlrv5S62kmrZ3g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c29mdHpvbmUuZXMv/YXBwL3VwbG9hZHMv/MjAxOC8wNC9ndWVz/dC5wbmc" alt="" />
                     <p className="sm:block hidden">{chat.nombre}</p>
                    </div>
                )
            })
          }

        
        </div>
        <section className=" mb-10 md:mb-0 w-3/4 h-5/6 text-white py-5 ">
            
             {
                (msg) ? 
                  <>
                <div className="flex flex-row justify-between p-3 border-b border-zinc-600">
                 <div className="flex flex-row gap-2 items-center">
                    <img className="w-10 rounded-full" src="https://imgs.search.brave.com/daq6W-1E3byUT6xxra3KAwC2JiWCQmlrv5S62kmrZ3g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c29mdHpvbmUuZXMv/YXBwL3VwbG9hZHMv/MjAxOC8wNC9ndWVz/dC5wbmc" alt="" />
                <h3 className="text-xl font-bold">{msg.nombre}</h3>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <CallIcon></CallIcon>
                    <VideocamIcon></VideocamIcon>
                  </div>

                  </div>                 
                    <div className="h-full flex flex-col gap-10 w-full overflow-auto">
                       {
                        msg.mensajes.map((mensaje)=>{
                            return(
                                (mensaje.propio) ?
                                <div className="relative flex flex-row gap-2 items-center p-3 pt-8 justify-start">
                                    <img className="w-8 h-8 rounded-full" style={{aspectRatio:1/1}} src="https://imgs.search.brave.com/daq6W-1E3byUT6xxra3KAwC2JiWCQmlrv5S62kmrZ3g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c29mdHpvbmUuZXMv/YXBwL3VwbG9hZHMv/MjAxOC8wNC9ndWVz/dC5wbmc" alt="" />
                                    
                                     <p className="absolute top-0 text-zinc-400">{ msg.nombre}</p>
                                     <p className="w-1/2">{mensaje.contenido}</p>
                                </div>
                                :
                                <div className="relative flex flex-row gap-2 items-center justify-end p-3 pt-8 text-end">
                                 <p className="w-1/2">{mensaje.contenido}</p>
                                 <img className="w-8 h-8 rounded-full" style={{aspectRatio:1/1}} src="https://imgs.search.brave.com/daq6W-1E3byUT6xxra3KAwC2JiWCQmlrv5S62kmrZ3g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c29mdHpvbmUuZXMv/YXBwL3VwbG9hZHMv/MjAxOC8wNC9ndWVz/dC5wbmc" alt="" />
                            </div>
                            )
                        })
                       }

                    </div>
                    <form className="w-full" action="#">
                        <input className="w-11/12 border border-zinc-600 rounded-2xl p-2 mx-5 bg-black outline-none" type="text" placeholder="Escriba un mensaje..."></input>
                    </form>
                    </>
                 : <div className="w-full h-full flex items-center justify-center"><p className="font-bold text-3xl">Tus mensajes</p></div>
             }
        </section>
        </div>

    )
}