import React, { useState } from 'react'

import "./categories.css"

export default function categories({images,label}) {

  return (
    <div >
      <img className="jennie" src={images} alt="" />
      <b>{label}</b>
    </div>


  )
}
