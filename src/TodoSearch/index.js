import React from "react";
import './TodoSearch.css'



function TodoSearch({ searchValue, setSearchValue}) {
    const onSearchValueChanged = (event) => {
        setSearchValue(event.target.value)
    }
    
    return(
        <>
        <div className="searchContainer">
            <input 
                className="search" 
                placeholder="Tarea 1"
                value={searchValue}
                onChange={onSearchValueChanged}
                />
            <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        </>
    );
}

export { TodoSearch };