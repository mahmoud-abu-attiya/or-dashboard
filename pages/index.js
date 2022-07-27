import Loginform from "../components/Loginform";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobile, setmobile] = useState(false);

  useEffect(() => {
    const updateLayouts = () => {
      if (window.innerWidth <= 992) {
        setmobile(true);
      } else {
        setmobile(false);
      }
    };
    window.addEventListener("resize", updateLayouts);
  }, []);

  return (
    <header>
      <div className="lf text-center">
        <div>
          <h1>POWERFUL TECHNOLOGY MADE SIMPLE</h1>
          <p>Manage & follow your work steps</p>
          <button className="shadow">
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
    </header>
  );
}
