import "./Campus.css"
import college1 from "../../assets/college1.png"
import college3 from "../../assets/college3.png"
import college4 from "../../assets/college4.png"
import college5 from "../../assets/college5.png"
import white_arrow from "../../assets/white-arrow.png"

const Campus = () => {
  return (
    <div className="campus">
        <div className="gallery">
            <img src={college1} alt="" />
            <img src={college3} alt="" />
            <img src={college4} alt="" />
            <img src={college5} alt="" />
        </div>
        <button className="btn dark-btn">View more <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus