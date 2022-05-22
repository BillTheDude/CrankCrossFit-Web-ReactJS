import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

//import style
import "../../Styles/Layouts/About Us/aboutus.css"

function AboutUs() {
    return(
        <>
            <title>CrankCrossfit | About Us</title>
            <NavBar/>
            <section className="coaches-section">
                <h2>Our coaches</h2>
                <p>It’s all about technique. That is the motto from every Crank Crossfit coach. They are the most skillful, experienced, as well as the most friendiest coaches you will ever find on any gym.</p>
                <div className="coaches-portraits">
                    <div className="gym-coach">
                        <h3 className="coach-name">Coach 1</h3>
                    </div>
                    <div className="gym-coach">
                        <h3 className="coach-name">Coach 2</h3>
                    </div>
                    <div className="gym-coach">
                        <h3 className="coach-name">Coach 3</h3>
                    </div>
                </div>
            </section>
            <section className="coach-mission-section">
                <div className="mission-description">
                    <h2>Coach Mission</h2>
                    <p>Our coaches are always present before and during the workout. <br/>
                        To make sure they teach the important techniques in order
                        to perform better on the main workout. 
                    </p>
                </div>
                <span>Image</span>
            </section>
            <Footer/>
        </>
    )
}

export default AboutUs