import React from "react";
import { useState } from 'react'
import userForm from "../hooks/userForm";

import FormInput from "./FormInput";

const Form = () => {
   const{value,error,success,handleChange,handleSubmit,handleInputFocus}= userForm()
   const[show,setShow] = useState(false)
    
        return (
          <>
          <div className='bg-gradient-to-r from-purple-500 to-red-500 w-screen h-screen'>
          <div className="container mx-auto  flex justify-center items-center w-full h-full">
            <div  className='bg-white p-5 relative  w-full md:w-5/6  border-t-8 border-yellow-500 md:border-blue-500'>
            <h1 className="text-center text-black text-3xl font-bold my-5">
              Form-Validation
            </h1>
            <p className={`text-center absolute font-bold bg-green-500 mx-auto transition-opacity duration-1000 text-white p-4 rounded-xl right-1 md:right-2 top-0 md:top-2  ${success?"opacity-100":"opacity-0"}`}> Hi {value.name} Form Submitted Successfully</p>
          <form onSubmit={handleSubmit} >
             <FormInput
             value = {value}
             error = {error}
             handleChange={handleChange}
             handleInputFocus={handleInputFocus}
             show={show}
             setShow={setShow}
             />
            <button type="submit" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br w-full md:w-1/2 font-bold md:text-2xl rounded-lg text-sm px-5 py-2.5 mx-auto block text-center  my-10">Submit</button>
      
          </form>
            </div>
          </div>
          </div>
      
          </>
        )
};

export default Form;
