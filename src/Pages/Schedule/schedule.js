import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

//import styles
import "../../Styles/Layouts/Schedule/schedule.css";

function Schedule(){
    return(
        <>
            <NavBar/>
                <section className="bootcamp-saturday-section">
                    <div className="bootcamp-sat-description">
                        <h2>Bootcamp Saturdays</h2>
                        <p>This saturday classes focusses on a more intense mobility and cardio workout. You are welcome to join every Saturday at 10am.</p>
                    </div>
                    <span>Image</span>
                </section>

                <section className="technique-saturday-section">
                    <div className="technique-sat-description">
                            <h2>Technique Sessions</h2>
                            <p>This session mainly focuses on practicing and help building a strong core technique movements that leads better performance. Join us every Saturday at 8:30am.</p>
                    </div>
                    <span>Image</span>
                </section>

                <section className="gym-classes-section">
                    <h2>Classes</h2>
                    <p className="disclaimer">Monday - Friday. Closed on Holidays.</p>
                    <div className="class-hours-wrapper">
                            <div className="day-class-info">
                                <h2>Morning <br/> Class</h2>
                                <p>5:00am - 6:00am</p>
                                <p>6:00am - 7:00am</p>
                                <p>8:00am - 9:00am</p>
                            </div>
                            <div className="day-class-info">
                                <h2>Evening <br/> Class</h2>
                                <p>4:00pm - 5:00pm</p>
                                <p>5:00pm - 6:00pm</p>
                                <p>6:00pm - 7:00pm</p>
                            </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default Schedule