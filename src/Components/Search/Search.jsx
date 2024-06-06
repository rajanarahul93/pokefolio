import useDebounce from '../../hooks/UseDebounce';


function Search({updateSearchTerm}){
    const debounceCallBack = useDebounce((e)=> updateSearchTerm(e.target.value))
    return(
        <div className="search-wrapper w-screen h-16  flex items-center justify-center"> 
            <input 
                // id ="pokemon-name-search w-44"
                className="w-3/5 h-4/5 mt-4 rounded-md border-solid pl-4 border-slate-500 border-2"
                type="text" 
                placeholder="Pokemon name...." 
                onChange={debounceCallBack}
            />
        </div>
    )
}

export default Search;