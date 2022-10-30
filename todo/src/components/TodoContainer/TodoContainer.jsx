import React from 'react'
// import Todo from '../Todo/Todo'



export default function TodoContainer(props) {
  console.log(props)
  return (
    <div className='todo-container'>{props.children}</div>
  )
}
