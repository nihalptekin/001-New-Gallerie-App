import React from 'react'

const Picture = ({data}) => {
  return (
    <div>
         {data.map(({id, src}) => {
      return (
        <div key={id}>
  
          </div>
      );
    })}
    </div>
  )
}

export default Picture