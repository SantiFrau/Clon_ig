import SearchIcon from '@mui/icons-material/Search';

export default function Buscador({setMenu}){

   return(
    <div className="relative h-screen w-76">
    <div className="fixed flex flex-col gap-5 bg-black w-76 bg-black z-20 h-screen p-3">
        <h3 className="w-full text-xl font-bold ">Busqueda</h3>
        <p className='absolute right-3 top-3 tex-zinc-400' onClick={()=>{setMenu (false)}}>x</p>
        <form action="#" className='w-full bg-zinc-800 rounded-md px-3 p-2'>
            <input className=" w-full bg-zinc-800  px-8 outline-none " type="text" placeholder="Busca" />
            <SearchIcon className='absolute left-3 text-zinc-400'></SearchIcon>
        </form>
        <div className='w-full h-px bg-zinc-500 '></div>
        <p className='font-bold text-zinc-300 text-lg'>Recientes</p>

    </div>
    </div>
   )
}