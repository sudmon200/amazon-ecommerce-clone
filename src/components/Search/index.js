import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
  return (
    <div className='search'>
      <input
        className='search__input'
        type='text'
        placeholder='Search for a product in the Amazon inventory'
      />
      <SearchIcon className='search__icon' />
    </div>
  );
}

export default Search;
