import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import HomeHeader2 from '../Home/components/HomeHeader2'
import Cookies from 'js-cookie';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate()


     const [email , setEmail] = useState("")
     const [password , setPassword] = useState("")

 
   
     const handleSubmit =()=>{
       console.log({"email" : email , "password" : password})


       try {

        axios.post("http://localhost:8080/api/login", {"email" : email , "password" : password} ).then(response=>{
            if (response.status ==400){
              alert("invalid signup")
            }else if (response.status==200){
              console.log("user logged in");
              Cookies.set('username',response.data.user.email);
            //   console.log(response.data.user.email)
            //  console.log(response)
            //   console.log(response.data.cookies)
              Cookies.set('token', response.data.cookies)
              navigate('/user-dashboard');
            }
          })
        
      } catch (error) {
         console.log(error)
      }

     }
    return (
        <>
             <div className='bg-[#161616] h-screen w-screen flex items-center justify-center flex-col '>
              
              <div className='absolute top-0 z-50'>
              <HomeHeader2></HomeHeader2>
              </div>
           


             <div className='inline-flex flex-col items-center justify-center relative     '>
             
             

                <div className='bg-[#242424]  text-white rounded-[18px] login-div-box-shadow'>
                    <div className="relative mt-12 w-full max-w-lg sm:mt-10">
                        <div
                            className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"

                        />
                        <div className="mx-5 mb-7 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20  rounded-lg border-white/20 border-l-white/20 border-r-white/20  lg:rounded-xl ">
                            <div className="flex flex-col p-6">
                                <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                                    Login
                                </h3>
                                <p className="mt-1.5 text-sm font-medium text-white/50">
                                    Welcome back, enter your credentials to continue.
                                </p>
                            </div>
                            <div className="p-6 pt-0">
                                <div >
                                    <form>
                                        <div>
                                            <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                                <div className="flex justify-between">
                                                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                        Email
                                                    </label>

                                                </div>
                                                <div className='flex items-center'>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    onChange={(e)=> setEmail(e.target.value)}
                                                    // placeholder="email"
                                                    value={email}
                                                    autoComplete="off"
                                                    className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                                                />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </form>
                                    <div className="mt-4">
                                        <div>
                                            <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                                <div className="flex justify-between">
                                                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        type="text"
                                                        name="password"
                                                        onChange={(e)=> setPassword(e.target.value)}
                                                        required
                                                        value={password}
                                                        className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">

                                        <p
                                            className="text-sm font-medium text-foreground underline"
                                          
                                        >
                                            Forgot password?
                                        </p>

                                    </div>
                                    <div className="mt-4 flex items-center justify-end gap-x-2">
                                        <Link to="/user-signup"
                                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all hover:underline mr-3"

                                        >
                                            Create New Account?
                                        </Link>
                                        <button
                                            className="font-semibold hover:bg-black hover:text-black hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                                            onClick={handleSubmit}
                                        >
                                            Log in
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
             </div>
            
        </>
    )
}

export default Login