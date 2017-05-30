import React from 'react';

const RenderList = ({ itemCollection }) => {
  if(!itemCollection.length) {
    return (
      <div>Add some items brooooo</div>
    )
  }

  const renderItems = () => {
    return itemCollection.map(item => {
      return (
        <div key={item.id}>
          <p>{item.input}</p>
          <button> destroy </button>
        </div>
      )
    })
  }

  return (
    <div>
      {renderItems()}
    </div>
  )
}

export default RenderList;
