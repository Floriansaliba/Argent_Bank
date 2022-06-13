
import Feature from "../components/Feature.jsx"
import iconChatSource from "../assets/img/icon-chat.png"
import iconMoneySource from "../assets/img/icon-money.png"
import iconSecuritySource from "../assets/img/icon-security.png"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import { getUserProfile } from "../API/ApiCalls.js"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getFirstName, getLastName, logged } from "../actions.js"
import { useEffect } from "react"



export default function Lobby (){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Get the token from local storage if any
    const token = localStorage.getItem("token")

    let remember = localStorage.getItem("remember")

    // Define titles 
    const chatIconTitle = "You are our #1 priority"
    const moneyIconTitle = "More savings means higher rates"
    const securityIconTitle = "Security you can trust"

    // Define text contents
    const chatIconTextContent = "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    const moneyIconTextContent = "The more you save with us, the higher your interest rate will be!"
    const securityIconTextContent = "We use top of the line encryption to make sure your data and money is always safe."


const verifyUser = ()=>{
    if(token && remember === "true"){
        getUserProfile(token)
        const saveProfile = async ()=>{
            const result = await getUserProfile(token)
            const firstName = await result.firstName
            const lastName = await result.lastName
            dispatch(getFirstName(firstName))
            dispatch(getLastName(lastName))
            dispatch(logged())
        }
        saveProfile()
        navigate("/UserPage"); 
    }
}

useEffect(()=>{
    verifyUser()
})
    

    
    return(
        <div className="container">
        <Header />
        <Hero />
            <section className="features">
                <Feature imageSource={iconChatSource} titleContent = {chatIconTitle} textContent={chatIconTextContent} />
                <Feature imageSource={iconMoneySource} titleContent = {moneyIconTitle} textContent={moneyIconTextContent} />
                <Feature imageSource={iconSecuritySource} titleContent = {securityIconTitle} textContent={securityIconTextContent} />
            </section>
        <Footer />
        </div>
    )
}