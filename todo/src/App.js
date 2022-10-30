import React from 'react'
import TodoHeader from './components/header/TodoHeader'
import TodoContainer from './components/TodoContainer/TodoContainer'
// import Todo from './components/Todo/Todo'

import './App.css'
import Todo from './components/Todo/Todo'

export default function App() {
  return (
    <div className='main-container'>
      <TodoHeader/>
      <TodoContainer/>
    </div>
  )
}
