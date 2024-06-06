// import Pokedex from './Components/Pokedex/pokedex'
import CustomRoutes from './routes/CustomeRoutes'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className='outer-pokedex flex-col items-center bg-gray-600'>
      <h1 className='text-center text-5xl tracking-widest font-bold text-blue-500'>
          <Link to="/">
          PokeFolio
        </Link>
      </h1>
      <CustomRoutes/>
    </div>
  )
}

export default App
