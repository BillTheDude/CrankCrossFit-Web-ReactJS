import React from "react";
import "../../Styles/Components/Footer/footer.css"
import gymLogo from '../../Assets/Logo/crankcrossfit-logo.jpg'

import {SocialMediaIconsReact} from 'social-media-icons-react';


function Footer() {
    return (
        <div>
            <section>
                <footer className="footer">
                    <div className="footer-content">
                        <div className="gym-logo-social-links">
                                <a href="#">
                                    <img src={gymLogo} className="gymLogo"/>
                                </a>
                                <ul className="social-media-links">
                                <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,0)" iconSize="4" roundness="50%" url="https://www.instagram.com/therealcrankcrossfit/?hl=en" size="40" />
                                <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="5" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,0)" iconSize="4" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
                                </ul>
                        </div>
                        <div className="gym-info">
                                <p className="gym-address">12117 SW 114th Pl, Miami, FL 33176</p>
                                <p className="gym-phone">Phone Number</p>
                                <p>gyms email</p>
                                
                        </div>
                    </div>
                    <p className="copyright-gym-label">&copy;2022 CrankCrossfit</p>
                </footer>
            </section>
        </div>
    )
}

export default Footer;