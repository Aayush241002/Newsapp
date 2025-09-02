import React, { Component } from 'react'
import loadingGif from './mainloading.gif'; 


const loading = ()=>  {
    return (
      <div>
        <img src={loadingGif} alt="" height={"50px"}/>
      </div>
    )
  
}
