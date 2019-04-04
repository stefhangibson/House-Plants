import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
  return (
    <div className='pa2'>
      <input
      className='pa3 ma15 ba b--green bg-lightest-blue'
      type='search'
      placeholder='Search Plants'
      onChange={searchChange}
      />
    </div>
  );
}
export default SearchBox;
