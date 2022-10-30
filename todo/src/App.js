import React from 'react'
import TodoHeader from './components/header/TodoHeader'
import TodoContainer from './components/TodoContainer/TodoContainer'

import './App.css'

export default function App() {
  return (
    <div className='main-container'>
      <TodoHeader/>
      <TodoContainer/>
    </div>
  )
}
