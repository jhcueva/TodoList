import React from "react";
import './TodoSearch.css'

interface TodoSearchProps {
  searchValue: string
  setSearchValue: (value: string) => void
  loading: boolean
}

function TodoSearch({ searchValue, setSearchValue, loading }: TodoSearchProps) {
  const onSearchValueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <div className="searchContainer">
        <input
          className="search"
          placeholder="Task 1"
          value={searchValue}
          onChange={onSearchValueChanged}
          disabled={loading}
        />
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </>
  );
}

export { TodoSearch };