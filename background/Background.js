
// import React from "react "
  import "../styles/Background.css"
import video from "../assets/background.mp4";
import image from "../assets/image.png"
const Background = () => { 

    return (
        <>
       <div className="shadow-overlay"/>
       <video playsInline autoPlay muted loop preload = "auto" id = "bg"  poster={image}>
       <source src= {video} type = "video/mp4"/>
       </video>
        </>
    )
}


export default Background