import React from 'react'

interface Props{
    cartItemCount : number;
}

const Nav = ({cartItemCount}: Props) => {
  return (
    <div>Item Count : {cartItemCount}</div>
  )
}

export default Nav