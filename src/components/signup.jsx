
import React,{useContext} from "react";
// import "./VideoBackground.css"; // Import custom styles
import { MyContext } from './filter'

function Signup() {

      return (
            <div className="video-container">
                  <video autoPlay loop muted playsInline className="background-video">
                        <source src="images/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                  </video>
                  <div className="Signup">

                        <h1>Welcome to My Website</h1>
                        <p>Your engaging tagline goes here!</p>
                        
                  </div>
            </div>
      )
}

export default Signup