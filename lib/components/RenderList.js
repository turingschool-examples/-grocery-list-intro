import React from 'react';

const RenderList = ({ itemCollection }) => {
  if(!itemCollection.length) {
    return (
      <div>Add some items brooooo</div>
    )
  }
  
  return (
    <div>
      Connected brooooo
    </div>
  )
}

export default RenderList;
