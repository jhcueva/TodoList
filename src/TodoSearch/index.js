import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'



function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)

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