import React from 'react'
import {IoMdDoneAll, IoMdClose} from 'react-icons/io'

export default function Todo() {
  return (
    <div className='todo-item'>
        <div className="title">
          My Startup ideas
        </div>
        <div className="done-bt-container">
          <IoMdDoneAll color='#0c10ff'/>
        </div>
        <div className="delete-bt-container">
          <IoMdClose color='#0c10ff'/>
        </div>
    </div>
  )
}
