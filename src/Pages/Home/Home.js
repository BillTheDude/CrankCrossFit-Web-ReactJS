import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import StartBtn from "../../Components/Buttons/StartBtn";

//import style
import "../../Styles/Layouts/Home/home.css"


function Home(){
    return(
    <>
        <NavBar/>
            <title>CrankCrossfit Kendall</title>
            <section className="welcome-gym-section">
                <div className="welcome-banner">
                    <h2>Crank it up!</h2>
                    <p>Kendall's most fittest crossfit!</p>
                </div>
                <div className="button-div">
                    <StartBtn/>
                </div>
            </section>
            <section className="crossfit-all-levels-section">
                <div className="section-description">
                    <h2>Crossfit for all levels</h2>
                    <p>Whether you’re a beginner at Crossfit or you’re experienced in it, Crossfit has no boundaries for anyone who wants to stay fit and live a healthy life.</p>
                </div>
                 <img src={require('../../Assets/Images/crossfit-working-out-desktop.png')}></img>
            </section>

            <section className="content-wrapper-section">
                <div className="content">
                    <h2>Live a healthy life</h2>
                    <p>Nutrition is as important as exercise.
                        Our coaches ensure to give the neccesary
                        nutritional for a more 
                        healthier lifestyle.</p>
                </div>
                <div className="content">
                    <h2>BootCamp Saturdays</h2>
                    <p>Want to challenge yourself a little more? Come join our Satudays bootcamp workout at 10am</p>
                </div>
                <div className="content">
                    <h2>More than just a gym</h2>
                    <p>This is content 3</p>
                </div>
                <div className="content">
                    <h2>Crank Smoothies</h2>
                    <p>This is content 4</p>
                </div>
                
            </section>

        <Footer/>
    </>
    )
}

export default Home