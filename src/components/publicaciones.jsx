import { publicaciones } from "../data/publicaciones"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import BookmarkIcon from '@mui/icons-material/Bookmark';
export default function Publicaciones (){


    
    return (<>
        {
        
            <div className="flex flex-col gap-5 w-full md:w-2/3">
               {
                publicaciones.map((publicacion,i)=>{
                   return(
                    <div key={i+100} className="w-full px-20 flex flex-col gap-3">
                      <div className="flex flex-row gap-2">
                        <img className="w-6 rounded-full" src="https://imgs.search.brave.com/daq6W-1E3byUT6xxra3KAwC2JiWCQmlrv5S62kmrZ3g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c29mdHpvbmUuZXMv/YXBwL3VwbG9hZHMv/MjAxOC8wNC9ndWVz/dC5wbmc" alt="" />
                        <p>{publicacion.usuario}</p>
                      </div>
                      <img src={publicacion.imagen} className="w-full rounded-lg" alt="" />
                      <div className="flex flex-row justify-between">
                        <div className="flex gap-3">
                            <FavoriteBorderIcon className="cursor-pointer hover:text-zinc-600"></FavoriteBorderIcon>
                            <CommentIcon className="cursor-pointer hover:text-zinc-600"></CommentIcon>
                            <SendIcon className="cursor-pointer hover:text-zinc-600"></SendIcon>
                        </div>
                             <BookmarkIcon className="cursor-pointer hover:text-zinc-600"></BookmarkIcon>
                      </div>
                      <p>{publicacion.likes} - Likes</p>
                      <p><span className="font-bold">{publicacion.usuario}</span> {publicacion.descripcion}</p>
                      <p className="text-zinc-500 cursor-pointer">View all {publicacion.comentarios} comments</p>
                      <form className="relative" action="#">
                        <input type="text" className="focus:text-white w-full bg-transparent text-zinc-400 outline-none " placeholder="Add a comment" />
                        <input className="absolute right-0 hover:text-blue-400 cursor-pointer" value="Send" onClick={(e)=>{e.preventDefault()}}  type="Submit" />
                      </form>
                    </div>
                   
                   )
                })
               }
            </div>
        }
        </>
    )
}