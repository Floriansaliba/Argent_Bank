import { useSelector, useDispatch } from "react-redux"
import argentBankLogo from "../assets/img/argentBankLogo.png"
import { NavLink } from 'react-router-dom'
import { clearFirstAndLastNames, loggedOut, getFirstName, getLastName } from "../actions"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"



const Header = ()=>{
  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getFirstName(localStorage.getItem("firstName")))
dispatch(getLastName(localStorage.getItem("lastName")))
},[dispatch])
  
  




  const userLogged = useSelector(state => state.isLogged)
  const firstName = useSelector(state => state.firstName)

  const firstNameToUpperCase = ()=>{
    if(firstName && firstName !== "" && firstName !== undefined){
      return firstName.charAt(0).toUpperCase() + firstName.slice(1);
    }
    return ""
  }


const signOut = ()=>{
  localStorage.clear()
  dispatch(clearFirstAndLastNames())
  dispatch(loggedOut())
}




  if(!userLogged){
        return(
        <nav className="main-nav">
        <NavLink to ="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
        <NavLink to="/SignIn">
          <i className="fa fa-user-circle"></i>
            Sign In
      </NavLink>
            
        </div>
      </nav>
    )
  }
  return(
    <nav className="main-nav">
      <NavLink to="/">
      <img
        className="main-nav-logo-image"
        src={argentBankLogo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

    <div className="navigation">
    
 


 <i className="fa fa-user-circle" style={{marginLeft : 10, marginRight : 10}}></i>
           <p className="user-name">{firstNameToUpperCase()}</p>
    <NavLink to="/SignIn" onClick={signOut} >
     <FontAwesomeIcon icon={faArrowRightFromBracket} style={{marginLeft : 10, marginRight : 10}}></FontAwesomeIcon>
     
        Sign out
  </NavLink>
        
    </div>
  </nav>
  )

}

export default Header