import { useSelector, useDispatch } from "react-redux"
import { closeProfilEditing, editProfil, getNewFirstName, getNewLastName, saveName } from "../actions";
import { getUserProfile, modifyUser } from "../API/ApiCalls";


const WelcomeSection = () => {
  const dispatch = useDispatch()


  const firstName = useSelector(state => state.firstName)
  const lastName = useSelector(state => state.lastName)

  const firstNameToUpperCase = ()=>{
    if(firstName && firstName !== "" && firstName !== undefined){
      return firstName.charAt(0).toUpperCase() + firstName.slice(1);
    }
    return ""
  }

  const lastNameToUpperCase = ()=>{
    if(lastName && lastName !== "" && lastName !== undefined){
      return lastName.charAt(0).toUpperCase() + lastName.slice(1);
    }
    return ""
  }

  const newFirstName = useSelector(state => state.newFirstName)
  const newLastName = useSelector(state => state.newLastName)

  const profilEditing = useSelector(state => state.profilEditing)

  const openProfilEditor = ()=>{
    dispatch(editProfil())
  }

  const closeProfilEditor = ()=>{
    dispatch(closeProfilEditing())
  }

  const save = ()=>{
    dispatch(saveName(newFirstName, newLastName))
    modifyUser(newFirstName, newLastName)
    dispatch(closeProfilEditing())
  }


  if(profilEditing === false){
    return(
        <div className="header">
        <h1>Welcome back<br />{firstNameToUpperCase()} {lastNameToUpperCase()}!</h1>
        <button className="edit-button" onClick={openProfilEditor}>Edit Name</button>
      </div>
    )
  }
  return(
    <div className="header">
        <h1>Welcome back</h1>
        <div>
          <input className="first-name" type="text" placeholder={firstName} onChange={(e)=>{dispatch(getNewFirstName(e.target.value))}} />
         <input className="last-name" type="text" placeholder={lastName} onChange={(e)=>{dispatch(getNewLastName(e.target.value))}}/>
        </div>
        <div>
          <button className="edit-button-save" onClick={save} >Save</button>
          <button className="edit-button-cancel" onClick={closeProfilEditor}>Cancel</button>
        </div>
   
      </div>
  )

}

export default WelcomeSection