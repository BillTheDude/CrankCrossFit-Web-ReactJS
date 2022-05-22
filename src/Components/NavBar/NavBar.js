import React from "react";
import '../../Styles/Components/NavBar/NavBar.css'
import gymLogo from '../../Assets/Logo/crankcrossfit-logo.jpg'


function NavBar(){
    return(
    <div>
        <section>
            <nav className="navbar">
                <ul>
                    <a href="/aboutus">About Us</a>
                    <a href="/schedule">Schedule</a>
                    <a href="/">
                        <img src={gymLogo} className="gymLogo"/>
                    </a>
                    <a href="#">Nutrition</a>
                    <a href="/contactUs">Contact</a>
                </ul>
            </nav>
        </section>
    </div>
    )
}

export default NavBar