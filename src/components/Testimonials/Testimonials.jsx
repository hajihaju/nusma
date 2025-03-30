import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import prev_icon from "../../assets/back-icon.png"
import girl1 from "../../assets/girl1.png"
import girl2 from "../../assets/girl2.png"
import girl3 from "../../assets/girl3.png"
import girl4 from "../../assets/girl4.png"
import { useRef } from "react"
const Testimonials = () => {

    const slider = useRef()

    let tx = 0

    const slideForward = () => {
        if (tx > -50) {
            tx -=25;
        }

        slider.current.style.transform =`translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx +=25;
        }

        slider.current.style.transform =`translateX(${tx}%)`
    }


    return (
        <div className="testimonials">
            <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
            <img src={prev_icon} alt="" className="back-btn" onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={girl1} alt="" />
                                <div>
                                    <h3>Hema priya</h3>
                                    <span>Vellore</span>
                                </div>
                            </div>
                            <p>The Computer Science Department has been more than just a place of learning—it’s a hub of innovation, collaboration, and growth. Grateful for the knowledge, experiences, and friendships I’ve gained here</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={girl2} alt="" />
                                <div>
                                    <h3>Aysha</h3>
                                    <span>Arni</span>
                                </div>
                            </div>
                            <p>Being a part of D.K.M. College has been a transformative journey. The passionate professors, quality education, and welcoming atmosphere have helped me grow in ways I never imagined. Truly grateful for this experience</p>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={girl3} alt="" />
                                <div>
                                    <h3>Ranuga</h3>
                                    <span>Arcot</span>
                                </div>
                            </div>
                            <p>"Studying in the Computer Science Department has been an exciting journey of discovery and challenges. The opportunities and support I’ve received here have shaped my path for the future!</p>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={girl4} alt="" />
                                <div>
                                    <h3>Lakshmi</h3>
                                    <span>Gudiyatham</span>
                                </div>
                            </div>
                            <p>In the Computer Science Department, I found not just knowledge, but a network of inspiring minds and endless possibilities. Thankful for every lesson, project, and friendship</p>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials