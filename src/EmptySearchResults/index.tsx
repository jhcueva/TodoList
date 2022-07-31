import React from 'react'
import './EmptySearchContainer.css'
import NotFound from './not-found.png'

export const EmptySearchResults = ({ searchValue }) => {
  return (
    <div className='emptysearchContainer'> 
      <h3>No results for "{searchValue}"</h3>
      <img className='notfoundImg' src={NotFound} alt="Not-found" />
    </div>
  )
}
