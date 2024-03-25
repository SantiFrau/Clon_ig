import Nav from "./components/nav.jsx"
import Historias from "./components/historias.jsx"
import Publicaciones from "./components/publicaciones.jsx"
function App() {
   
 
  return (
    <>

      <div className="flex flex-row text-white ">
         
         <Nav></Nav>

         <div className='w-4/5 h-full bg-black flex'>

          <div className='w-2/3 h-full flex flex-col gap-10' >
             <Historias></Historias>
             
             <Publicaciones></Publicaciones>
          </div>


          

         </div>

         


      </div>
    </>
  )
}

export default App
