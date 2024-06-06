import { Link } from 'react-router-dom';

function Pokemon({name, image, id}){
    return(
        <div className='pokemon mt-10 flex items-center justify-center'> 
            <Link to={`/pokemon/${id}`}>
                <div className='pokemon-name text-lg font-bold text-center mb-3 tracking-widest capitalize hover:text-blue-800'>{name}</div>
                <div> <img className='pokemon-img hover:bg-yellow-100 h-52 w-52 border-solid border-2' src={image}/></div>
            </Link>
        </div>
    )
}

export default Pokemon;