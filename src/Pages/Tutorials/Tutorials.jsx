import React from "react";
import "./Tutorials.css";

const tutorials = {
  "Additional Courses YouTube Channels": [
    { name: "CS in Tamil", url: "https://www.youtube.com/c/CSinTamil" },
    { name: "GUVI Tamil", url: "https://www.youtube.com/c/GUVITamil" },
    { name: "Code Tamil", url: "https://www.youtube.com/@codetamil" },
    { name: "Tech Boss Tamil", url: "https://www.youtube.com/c/TechBossTamil" },
    { name: "G-Tech Tamil", url: "https://www.youtube.com/c/GTechTamil" },
    { name: "EBox Tamil", url: "https://www.youtube.com/c/EBoxTamil" },
    { name: "Tech Aruvi Tamil", url: "https://www.youtube.com/@TechAruvi" },
    { name: "Study Tech Tamil", url: "https://www.youtube.com/@StudyTechTamil" },
    { name: "Learn All In Tamil", url: "https://www.youtube.com/channel/UCDUkTOFe-a6Jj3Gloww4nww" },
    { name: "Tutor Joes", url: "https://www.youtube.com/c/TutorJoes" },
  ],
  Development: [
    { name: "Web Dev Simplified", url: "https://www.youtube.com/c/WebDevSimplified" },
    { name: "The Net Ninja", url: "https://www.youtube.com/c/TheNetNinja" },
    { name: "Traversy Media", url: "https://www.youtube.com/c/TraversyMedia" },
    { name: "Academind", url: "https://www.youtube.com/c/Academind" },
    { name: "Programming with Mosh", url: "https://www.youtube.com/c/programmingwithmosh" },
    { name: "CodeWithHarry", url: "https://www.youtube.com/c/CodeWithHarry" },
    { name: "Bro Code", url: "https://www.youtube.com/c/BroCodez" },
    { name: "JavaScript Mastery", url: "https://www.youtube.com/c/JavaScriptMastery" },
    { name: "Codevolution", url: "https://www.youtube.com/c/Codevolution" },
    { name: "Simplilearn", url: "https://www.youtube.com/c/Simplilearn" },
  ],
  Designing: [
    { name: "Adobe Photoshop Tutorials", url: "https://www.youtube.com/c/PhotoshopTrainingChannel" },
    { name: "GFX Mentor", url: "https://www.youtube.com/c/GFXMentor" },
    { name: "Spoon Graphics", url: "https://www.youtube.com/c/SpoonGraphics" },
    { name: "DesignCourse", url: "https://www.youtube.com/c/DesignCourse" },
    { name: "Pixel & Bracket", url: "https://www.youtube.com/c/PixelBracket" },
    { name: "Yes I'm a Designer", url: "https://www.youtube.com/c/YesImADesigner" },
    { name: "Envato Tuts+", url: "https://www.youtube.com/c/tutsplus" },
    { name: "CharliMarieTV", url: "https://www.youtube.com/c/CharliMarieTV" },
    { name: "Flux Academy", url: "https://www.youtube.com/c/FluxAcademy" },
    { name: "Will Paterson", url: "https://www.youtube.com/c/WillPatersonDesign" },
  ],
  Editing: [
    { name: "Premiere Gal", url: "https://www.youtube.com/c/PremiereGal" },
    { name: "Justin Odisho", url: "https://www.youtube.com/c/JustinOdisho" },
    { name: "Film Riot", url: "https://www.youtube.com/c/filmriot" },
    { name: "Cinecom.net", url: "https://www.youtube.com/c/Cinecom" },
    { name: "Peter McKinnon", url: "https://www.youtube.com/c/PeterMcKinnon" },
    { name: "Jordy Vandeput", url: "https://www.youtube.com/c/JordyVandeput" },
    { name: "Max Novak", url: "https://www.youtube.com/c/MaxNovak" },
    { name: "Chung Dha", url: "https://www.youtube.com/c/ChungDha" },
    { name: "Red Giant", url: "https://www.youtube.com/c/RedGiant" },
    { name: "VFX Wizard", url: "https://www.youtube.com/c/VFXWizard" },
  ],
  Cloud: [
    { name: "AWS Training & Certification", url: "https://www.youtube.com/c/AWSTraining" },
    { name: "Google Cloud Tech", url: "https://www.youtube.com/c/GoogleCloudPlatform" },
    { name: "Microsoft Azure", url: "https://www.youtube.com/c/Azure" },
    { name: "IBM Cloud", url: "https://www.youtube.com/c/IBMCloud" },
    { name: "FreeCodeCamp Cloud", url: "https://www.youtube.com/c/Freecodecamp" },
    { name: "Cloud Academy", url: "https://www.youtube.com/c/CloudAcademy" },
    { name: "Tech with Tim - Cloud", url: "https://www.youtube.com/c/TechWithTim" },
    { name: "Linux Academy", url: "https://www.youtube.com/c/LinuxAcademy" },
    { name: "Google Cloud Platform", url: "https://www.youtube.com/c/GoogleCloudPlatform" },
    { name: "DigitalOcean", url: "https://www.youtube.com/c/DigitalOcean" },
  ],
};

const Tutorials = () => {
  return (
    <div className="tutorials-page">
      <h1>CS Central Tutorials</h1>
      {Object.entries(tutorials).map(([category, links]) => (
        <div className="tutorials-box" key={category}>
          <h2>{category}</h2>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tutorials;
