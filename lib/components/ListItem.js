import React from 'react';

const ListItem = ({ input, id, destroy }) => {

  return (
    <div>
      <p>{input}</p>
      <button onClick={() => destroy(id)}> destroy </button>
    </div>
  )
}

export default ListItem
