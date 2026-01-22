import React, { useState } from 'react'

const Login = ({handlelogin}) => {
    

    
    
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')



    const submithandler = (e) =>{
        e.preventDefault()
        handlelogin(email,password)
        setemail("")
        setpassword("")
        
        

    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
            onSubmit={(e)=>{
                submithandler(e)
            }}
            className='flex flex-col items-center justify-center'>

                <input 
               value={email}
                onChange={(e) =>{
                    setemail(e.target.value)
                }}
                required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 ' type='email' placeholder='Enter your email'
                />   
                
                <input  
                value={password}
                onChange={(e) =>{
                    setpassword(e.target.value)

                }}
                required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3  placeholder:text-gray-400  'type='password' placeholder='Enter your password'
                />
                <button className=' mt-5 text-white outline-none  border-none bg-emerald-600 text-xl py-3 px-5 rounded-full '>Log in</button>
            </form>

        </div>
    </div>
  )
}

export default Login