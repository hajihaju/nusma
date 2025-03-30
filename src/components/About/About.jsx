import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"


const About = ({setPlayerState}) => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className="about-img" />
            <img src={play_icon} alt="" className="play-icon" onClick={() => setPlayerState(true)}/>
        </div>
        <div className="about-right">
            <h3>About the Department.</h3>
            <h2>Unlocking Success in the Digital World</h2>
            <p>Dedicated to excellence in education and research, our Computer Science Department provides a dynamic learning environment where students explore cutting-edge technologies and develop problem-solving skills</p>
            <p>Explore our cutting-edge programs, connect with our expert faculty, and discover the endless opportunities in the world of technology. Join us and embark on an educational journey that pushes the boundaries of innovation and computing.</p>
        </div>
    </div>
  )
}

export default About