import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import VideoPlayer from "./components/Videoplayer/Videoplayer";
import NotesPage from "./pages/NotesPage"; // Import the Notes Page
import Tutorials from "./Pages/Tutorials/Tutorials"; 


const App = () => {
  const [playerState, setPlayerState] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page (Existing Components) */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <div className="container">
                <Title title={"We offer"} subtitle={"Our Programs"} />
                <Programs />
                <About setPlayerState={setPlayerState} />
                <Title title={"Photos of the Campus"} subtitle={"Gallery"} />
                <Campus />
                <Title title={"What Our Students Say"} subtitle={"Testimonials"} />
                <Testimonials />
                <Title title={"Contact Us"} subtitle={"Contact"} />
                <Contact />
                <Footer />
              </div>
              <VideoPlayer playerState={playerState} setPlayerState={setPlayerState} />
            </>
          } 
        />
        
        {/* Notes Page */}
        <Route path="/notes" element={<NotesPage />} />

        {/* Tutorials Page */}
        <Route path="/tutorials" element={<Tutorials />} />
      </Routes>
    </Router>
  );
};

export default App;
