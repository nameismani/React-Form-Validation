import React from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";

const FormInput = ({error,show,handleChange,handleInputFocus,value,setShow}) => {
  return <>
            <div className="flex justify-center flex-wrap my-0 md:mb-2">
            <div className='basis-full md:basis-2/5 md:mx-3'>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                  <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " name="name" placeholder="Enter Your Name" value={value.name} onChange={handleChange} onFocus = {handleInputFocus}/>
                  <small className={error.name?"text-red-600 md:text-center block text-sm":"invisible block"}>{error.name?error.name:'Error'}</small>
              </div>
              <div className='basis-full md:basis-2/5 md:mx-3'>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                  <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg  block w-full p-2.5 " name="email" placeholder="Enter Your Email" value={value.email} onChange={handleChange} onFocus = {handleInputFocus}/>
                  <small className={error.email?"text-red-600 md:text-center block text-sm":"invisible block"}>{error.email?error.email:'Error'}</small>
              </div>  
            </div>
            <div className="flex justify-center flex-wrap my-0 md:my-2">
            <div className='basis-full md:basis-2/5 md:mx-3'>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                  <div className="relative">
                  <input type= {show?"text":"password"} id="password" className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 " name="password"  placeholder="Enter password" value={value.password} onChange={handleChange} onFocus = {handleInputFocus}/>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" onClick={(e)=> setShow(!show)}>{
                    show ?<FaEyeSlash className="text-xl" /> :<FaEye className="text-xl" />
                  }</div>
                  </div>
                  
                  
                  <small className={error.password?"text-red-600 md:text-center block text-sm":"invisible block"}>{error.password?error.password:'Error'}</small>
              </div>
              <div className='basis-full md:basis-2/5 md:mx-3'>
                  <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
                  <input type="password" id="password2" className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg  block w-full p-2.5 " name="password2" placeholder="Confirm Password" value={value.password2} onChange={handleChange} onFocus = {handleInputFocus}/>
                  <small className={error.password2?"text-red-600 md:text-center block text-sm":"invisible block"}>{error.password2?error.password2:'Error'}</small>
              </div>  
            </div>
  </>;
};

export default FormInput;
