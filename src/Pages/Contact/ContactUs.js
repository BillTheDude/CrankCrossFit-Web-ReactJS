import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Forms from "../../Components/Forms/form";

//import style
import "../../Styles/Layouts/Contact/contactUs.css"

function ContactUs(){
    return(
        <>
            <NavBar/>
                <title>CrankCrossfit | Contact</title>
                <section className="follow-us-section">
                    <div className="gym-follow-us-instagram">
                            <h2> Follow us</h2>
                            <p>Follow us on social media and tag us <br/> <a className="instagram-link" href="https://www.instagram.com/therealcrankcrossfit/?hl=en" target={"_blank"}>@therealcrankcrossfit </a></p>
                    </div>
                    <div className="image-container">
                            <img src={require('../../Assets/Images/gym-iphone-instagram-page.png')}></img>
                    </div>
                </section>
                <Forms/>
            <Footer/>
        
        </>
    )
}

export default ContactUs