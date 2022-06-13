
import Form from "../components/Form"
import Footer from "../components/Footer"
import { createUser } from "../API/ApiCalls"



const SignInPage = () => {

    createUser("tony@stark.com", "password123", "Tony", "Stark")
    createUser("steve@rogers.com", "password456", "Steve", "Rogers")
 
return(
    <div className="container">
        <main className="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <Form />
        </section>
        </main>
        <Footer />
    </div>
)
}

export default SignInPage

