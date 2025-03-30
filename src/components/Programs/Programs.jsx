import "./Programs.css"
import ug2  from "../../assets/ug2.png"
import ug3  from "../../assets/ug3.png"
import ug6  from "../../assets/ug6.png"
import program_icon_1 from "../../assets/program-icon-1.png"
import program_icon_2 from "../../assets/program-icon-2.png"
import program_icon_3 from "../../assets/program-icon-3.png"
const Programs = () => {
  return (
    <div className="programs">
        <div className="program">
            <img src={ug2} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p> Undergraduate</p>
            </div>
        </div>
        <div className="program">
            <img src={ug3} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Master's Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={ug6} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Postgraduate Studies</p>
            </div>
        </div>
    </div>
  )
}

export default Programs