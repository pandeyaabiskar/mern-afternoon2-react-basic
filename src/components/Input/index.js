import React from 'react'

function Input(props) {
    const { inputValue, handleInputChange } = props;

  return (
    <input
    type="text"
    name="todo"
    value={inputValue}
    onChange={handleInputChange}
  />
  )
}

export default Input