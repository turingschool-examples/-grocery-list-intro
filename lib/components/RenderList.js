import React from 'react';
import ListItem from './ListItem';

const RenderList = ({ itemCollection, destroy }) => {
  if(!itemCollection.length) {
    return (
      <div>Add some items brooooo</div>
    )
  }

  const renderItems = () => {
    return itemCollection.map(item => {
      return (
        <div key={item.id}>
          <ListItem {...item} destroy={destroy} />
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
