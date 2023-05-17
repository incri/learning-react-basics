import React, { useState } from 'react'
import {AiFillLike} from "react-icons/ai"
import {AiOutlineLike} from "react-icons/ai"


interface Props{
  onClick: () => void;
}
const Like = ({onClick}:Props) => {

  const [like, setLike] = useState(false)
  const toggle = () => {
    setLike(!like);
    onClick();
    console.log(like)
  }
  if (like){
    return (
      <AiFillLike color='blue' size="30" onClick={toggle}/>
    )
  }
  return(<AiOutlineLike size="30" onClick={toggle} />)
}

export default Like