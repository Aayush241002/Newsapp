import React from 'react'
import loadingGif from './loadinggiff.gif'; 


const Loading = () => {
    return (
      <div>
        <img src={loadingGif} alt="" style={{height:"60px"}} />
      </div>
    )
  
}

export default Loading; // 
