import React ,{ useState } from "react";
import validate from "../utils/validate";
const userForm = () => {
    const [value,setValue] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
       })
      
       const [error,setError] = useState({})
       const [success,setSuccess] = useState(false)
      

       const handleChange = (e)=> setValue((preValue)=>{
        return {
         ...preValue,[e.target.name]:e.target.value
        }
         })
         
        const handleInputFocus = (e)=> setError((preVal)=>{
            return {
              ...preVal,[e.target.name] :""
            }
          })
      
      const handleSubmit = (e)=>{
        e.preventDefault()
        if(Object.keys(validate(value)).length>0){
            setError(validate(value))
        }else{
            setSuccess(true)
            setTimeout(()=>{
                setSuccess(false)
            },2000)
        }
       
       console.log(error)
      }

      return {value,error,success,validate,handleChange,handleSubmit,setError,setValue,handleInputFocus}
};

export default userForm;
