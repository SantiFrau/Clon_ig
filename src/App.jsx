import Nav from "./components/nav.jsx"
import Historias from "./components/historias.jsx"
import Publicaciones from "./components/publicaciones.jsx"
function App() {
   
 
  return (
    <>

      <div className="flex flex-row text-white gap-3 w-full h-full ">
         
         <Nav></Nav>

         <div className=' w-full h-full bg-black flex'>

          <div className='w-2/3 h-full flex flex-col gap-5 m-auto' >
             <Historias></Historias>
             
             <Publicaciones></Publicaciones>
          </div>


          

         </div>

         


      </div>
    </>
  )
}

export default App
