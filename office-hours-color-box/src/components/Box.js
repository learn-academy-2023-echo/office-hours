import React, { useState } from 'react'

const Box = () => {
 
  const [color, setColor] = useState("white")

  const colors = ["mediumslateblue", "red", "yellow", "mediumspringgreen", "rebeccapurple", "brown", "black", "mediumvioletred", "deeppink"]

  const colorChange = () => {
    let randomIndex = Math.floor(Math.random()* colors.length)
    console.log(randomIndex)
    setColor(colors[randomIndex])
  }

  return (
    <>
      
      <div className="box" onClick={colorChange} style={{backgroundColor: color}}>
        
      </div>
   
    </>
  )
}

export default Box