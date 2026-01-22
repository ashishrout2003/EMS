import React, { useContext } from 'react'
import { Authcontext } from '../../Context/Authprovider'

const Alltask = () => {
  const [userData,setuserData] = useContext(Authcontext)
  
  
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 '>

      <div className='bg-red-400 py-2 px-4 flex justify-between rounded'>
            <h3 className='text-lg font-medium w-1/5 '>Employee Name</h3>
            <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
        </div>

     <div className=''>
      {userData.map(function(elem,idx){
        return <div key={idx} className=' border-2 border-emerald-800 mt-2 py-2 px-4 flex justify-between rounded'>
            <h3 className='text-lg font-medium w-1/5'>{elem.firstname}</h3>
            <h3 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskCount.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCount.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-purple-600'>{elem.taskCount.failed}</h5>
        </div>
      })}
     </div>
        
    </div>
  )
}

export default Alltask