import React from 'react'

export default function Button(props) {
const {children, clickHandler} = props
  return (
      <button onClick={clickHandler}>{children}</button>
  )
}

