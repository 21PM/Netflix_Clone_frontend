import React, { useState } from 'react'
import Header from './Header'
import axios from "axios"
import { API_END_POINT } from '../utils/API'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { setUser } from '../reduxrtk/userslice'

function Login() {


  const user = useSelector(store=>store.user)

  // console.log(user);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const[loading,Setloading] = useState(false)
  const [isLogin,SetisLogin] = useState(true)
  const [fullName,SetFullName] = useState("")
  const [email,SetEmail] = useState("")
  const [password,SetPassword] = useState("")

function handleLogin(){

    SetisLogin(!isLogin)
  }

  const handleoform = async (e)=>{
      e.preventDefault()

      if(isLogin){

        if(!email || !password){
          toast.error("Please enter email Id and password")
            return;
          
        }
      Setloading(true)

        // IF USER CLICK ON LOGIN THEN LOGIN API WILL BE CALLED
        const user = {email,password}
        try{
          const res = await axios.post(`${API_END_POINT}/login`,user,{
            headers:{
              "Content-Type":"application/json"
            },
            withCredentials:true
          })

          dispatch(setUser(res.data.user))

          console.log(res);
          if(res.data.status){

            toast.success("You are login successfully")
          }
          
          navigate("/browse")

        }catch(e){
          console.log(e);
          toast.error("Invalid user Id or password")
        }finally{
          Setloading(false)
        }

      }else{

        // IF USER CLICK ON SIGN UP THEN REGISTRATION API WILL BE CALLED
        
      if(!email || !password || !fullName){
        toast.error("Please enter all the details as per below form")
        return;
      }
      Setloading(true)

        const newUserData = {
          fullName,
          email,
          password
        }

      try{
        const res = await axios.post(`${API_END_POINT}/register`,newUserData,{
          headers:{
            "Content-Type":"application/json"
          },
          withCredentials:true
        });
        if(res.data.status){

          toast.success("Account created sucessfully")
        }
        SetisLogin(!isLogin)
        
      }catch(e){
          console.log(e);
          toast.error(`unable to create account ${e.response.data.message}`)
      }finally{
        Setloading(false)
      }
      }

  }


  return (
    <>
    <div>
    <Header/>
    <div className="absolute">
        <img className='w-[100vw] h-[100vh]'
        src='https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp' alt='Netflix Background Image'></img>
    </div>
    <form onSubmit={handleoform} className="flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto  bg-black items-center justify-center absolute opacity-70">
        <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Sign up"}</h1>
        <div className='flex flex-col'>
          {
            !isLogin && <input type="text" value={fullName} onChange={(e)=>SetFullName(e.target.value)} className="outline-none p-3 my-2 text-white rounded-sm bg-gray-800" placeholder='Full Name' />

          }
            <input type="email" value={email} onChange={(e)=>SetEmail(e.target.value)} className="outline-none p-3 my-2 text-white rounded-sm bg-gray-800"  placeholder='Email' />
            <input type="password" value={password} onChange={(e)=>SetPassword(e.target.value)}  className="outline-none p-3 my-2 text-white rounded-sm bg-gray-800"  placeholder='Password'/>
            <button className='bg-red-700 mt-6 p-3 text-white font-bold'>{loading ? "Loading..." : (isLogin ? "Login" : "Sign up")}</button>
            <p className='text-white'>{isLogin ? "New to Netflix " : "Already have an account"} <span className='ml-1 text-red-600 font-medium cursor-pointer' onClick={handleLogin}>{isLogin ? "signup" : "Login"}</span></p>
        </div>
        
        
    </form>
    </div>
    </>
  )
}

export default Login