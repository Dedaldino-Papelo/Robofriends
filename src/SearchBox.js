const SearchBox = ({ SearchChange }) =>{
    return(
        <div>
            <input onChange={SearchChange} className="pa2 mb3" type="test" placeholder="Enter a name"/>
        </div>
    )

}

export default SearchBox;