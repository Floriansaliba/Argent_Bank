
import Footer from "../components/Footer"
import AccountSection from "../components/AccountSection"
import WelcomeSection from "../components/WelcomeSection"
import { useSelector } from "react-redux"
import SignInPage from "./SignInPage"

const UserPage = () => {
const userLogged = useSelector(state => state.isLogged)

if(!userLogged){
    return(
        <SignInPage />
    )
}


    return(
        <div className="container">
            <main className="main bg-dark">
                <WelcomeSection />
                <AccountSection accountName="Argent Bank Checking (x8349)" balance ="$2,082.79"/>
                <AccountSection accountName="Argent Bank Savings (x67124)" balance ="$10,928.42"/>
                <AccountSection accountName="Argent Bank Credit Card (x5201)" balance ="$184.30"/>
            </main>
            <Footer />
        </div>
    )
}

export default UserPage