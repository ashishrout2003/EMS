import React from 'react'
import Header from '../Other/Header'
import Tasklistnumbers from '../Other/Tasklistnumbers'
import Tasklist from '../Tasklist/Tasklist'



const Employeedashboard = (props) => {

  return (
    <div className='p-20 bg-[#1c1c1c] h-screen'>
      
        <Header changeUser={props.changeUser} data={props.data}/>
        <Tasklistnumbers data={props.data}/>
        <Tasklist data={props.data} />
        
    </div>
  )
}

export default Employeedashboard