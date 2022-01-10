import React,{useEffect} from 'react'
import './contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Anshika from '../images/anshika.jpeg'
export default function Contact() {

    useEffect(() => { 
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            
          
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 200, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 800, // values from 0 to 3000, with step 50ms
            easing: 'ease-in-sine', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
          
          });
    }, [])

    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-society">
                    TECHNOBYTE
                </div>
                <div className='contact-cards-container'>
                <div className="contact-card" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="contact-content">
                        <img className='contact-image' src={Anshika}></img>
                        <div>
                        <h3>Anshika Jain</h3>
                        <p>Vice President</p>
                        <p>+91 7404268515</p>
                        </div>
                    </div>
                </div>
                <div className="contact-card" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="contact-content">
                    <img className='contact-image' src={Anshika}></img>
                        <div>
                        <h3>Anshika Jain</h3>
                        <p>Vice President</p>
                        <p>+91 7404268515</p>
                        </div>
                    </div>
                </div>
                <div className="contact-card" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="contact-content">
                        <img className='contact-image' src={Anshika}></img>
                        <div>
                        <h3>Anshika Jain</h3>
                        <p>Vice President</p>
                        <p>+91 7404268515</p>
                        </div>
                    </div>
                </div>
                <div className="contact-card" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="contact-content">
                    <img className='contact-image' src={Anshika}></img>
                        <div>
                        <h3>Anshika Jain</h3>
                        <p>Vice President</p>
                        <p>+91 7404268515</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="contact-container">
                <div className="contact-society">
                    TECHNOBYTE
                </div>
                <div className='contact-cards-container'>
                <div className="contact-card" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="contact-content">
                        <img className='contact-image' src={Anshika}></img>
                        <div>
                        <h3>Anshika Jain</h3>
                        <p>Vice President</p>
                        <p>+91 7404268515</p>
                        </div>
                    </div>
                </div>
                <div className="contact-card" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="contact-content">
                    <img className='contact-image' src={Anshika}></img>
                        <div>
                        <h3>Anshika Jain</h3>
                        <p>Vice President</p>
                        <p>+91 7404268515</p>
                        </div>
                    </div>
                </div>
                <div className="contact-card" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="contact-content">
                        <img className='contact-image' src={Anshika}></img>
                        <div>
                        <h3>Anshika Jain</h3>
                        <p>Vice President</p>
                        <p>+91 7404268515</p>
                        </div>
                    </div>
                </div>
                <div className="contact-card" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="contact-content">
                    <img className='contact-image' src={Anshika}></img>
                        <div>
                        <h3>Anshika Jain</h3>
                        <p>Vice President</p>
                        <p>+91 7404268515</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
