import React from 'react'
import { useState } from 'react';

interface Props{
  children: String;
  maxChar : number;
}
const Expandable = ({children, maxChar}: Props) => {
  const[isExtended, setExtended] = useState(false);

  if (children.length <= maxChar) return(
    
    <>
      <h1>Expandable Text</h1>
      <p>{children}</p>
    </>
    
  ) 
  const text = isExtended? children: children.substring(0, maxChar)
  
  return(
    <>
      <h1>Expandable Text</h1>
      <p>{text}...<button onClick={()=> setExtended(!isExtended)}>{isExtended ? 'Less' : 'More'}</button></p>;
    </>
    
  ) 
}

export default Expandable