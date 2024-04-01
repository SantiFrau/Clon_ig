import Nav from "./components/nav.jsx"
import Historias from "./components/historias.jsx"
import Publicaciones from "./components/publicaciones.jsx"
import Mensajes from "./components/mensajes.jsx";
import { Route, Routes} from "react-router-dom";
function App() {
   
 
  return (
    <>

      <div className="flex flex-row text-white gap-3 w-full h-full ">
         
         <Nav></Nav>

         <div className=' w-full h-full bg-black flex'>

          <div className='w-full h-full flex flex-col gap-5 items-center justify-center mt-10 md:mt-0' >
             
          <Routes>
              <Route path="/Clon_ig/" element={<><Historias></Historias><Publicaciones></Publicaciones></>} />
              <Route path="/Clon_ig/mensajes" element={<Mensajes></Mensajes>} />
            </Routes>
          </div>


          

         </div>

         


      </div>
    </>
  )
}

export default App
