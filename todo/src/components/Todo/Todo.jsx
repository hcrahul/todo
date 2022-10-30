import React from 'react'
import {IoMdDoneAll} from 'react-icons/io'

export default function Todo() {
  return (
    <div className='todo-item'>
        <div className="title">
          My Startup ideas
        </div>
        <div className="done-bt-container">
          <IoMdDoneAll color='#1D1CE5'/>
        </div>
    </div>
  )
}
