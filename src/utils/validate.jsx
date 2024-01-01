const validate = (value)=>{

    let error ={}
    let regExp = /^[^ ]+@[^ ]+\.com$/
    if(value.name.trim() == ""){
      error.name = "Value field is requried"
    }
    if(value.email.trim()==""){
        error.email="Email field is required"
    }else if(!value.email.match(regExp)){
        error.email = "Enter a valid email"
    }

    if(value.password == ""){
        error.password ="Password field is required"
    }else if(value.password.length <8){
        error.password = "Password need to be at least 8 character"
    }

    if(value.password2 == ""){
        error.password2 = "Confirm Password filed is requried"
    }else if(value.password != value.password2){
        error.password2= "Passwords do not match"
    }
   return error
}

export default validate