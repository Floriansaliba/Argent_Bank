
// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postFormData } from "../API/ApiCalls"
import { getEmail, getPassword, logged, clearForm, getFirstName, getLastName } from "../actions"
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../API/ApiCalls";



const Form = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const password = useSelector(state => state.password)
    const email = useSelector(state => state.email)

    const handleCheckBox = (e) =>{
            if(e.target.checked === true){
                localStorage.setItem("remember", "true")
            }
            else{
                localStorage.setItem("remember", "false")
            }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const response = await postFormData(email, password)
        
        if(response !== "error"){
            const token = localStorage.getItem("token")
            const userProfile = await getUserProfile(token)
            if(userProfile !== "not found"){
                dispatch(logged())
                dispatch(getFirstName(userProfile.firstName))
                dispatch(getLastName(userProfile.lastName))
                navigate("/UserPage");   
            }
            
            
        }    
        dispatch(clearForm()) 
    }

    

  

   

    return(
        <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username"  onChange={(e)=>{dispatch(getEmail(e.target.value))}} />
        </div>
        <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password"   onChange={(e)=>{dispatch(getPassword(e.target.value))}} />
        </div>
        <div className="input-remember">
            <input onChange={handleCheckBox} type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button" >Sign In</button>
        </form>
    )
}

export default Form