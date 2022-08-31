import Loginform from "../components/Loginform";
import { useState, useEffect } from "react";
import YoutubeVideo from "../components/YoutubeVideo";

export default function Home() {
  const [mobile, setmobile] = useState(false);
  const [video, setVideo] = useState(false);

  useEffect(() => {
    const updateLayouts = () => {
      if (window.innerWidth <= 992) {
        setmobile(true);
      } else {
        setmobile(false);
      }
    };
    updateLayouts();
    window.addEventListener("resize", updateLayouts);
  }, []);

  return (
    <header className="home">
      <div className="lf text-center">
        <div>
          <h1>POWERFUL TECHNOLOGY MADE SIMPLE</h1>
          <p>Manage & follow your work steps</p>
          <button className="shadow" onClick={()=>setVideo(true)}>
            <i className="fal fa-play-circle"></i> Watch This
          </button>
          {mobile ? <Loginform /> : <></>}
        </div>
      </div>
      {mobile ? (
        <></>
      ) : (
        <div className="ri shadow bord">
          <Loginform />
        </div>
      )}
        {video && ( 
        <div className="video">
          <button className="cansel" onClick={()=>setVideo(false)}><i className="fas fa-times"></i></button>
          <YoutubeVideo />
        </div>
        )}
    </header>
  );
}
