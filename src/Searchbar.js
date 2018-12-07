import React from 'react';

function Searchbar(props) {
  return (
    <form>
      <input type="text" onChange={props.onChange} />
      <input type="submit" value="Search" />
    </form>
  );
}

export default Searchbar;
