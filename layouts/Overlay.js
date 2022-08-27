import { useEffect } from "react"

const Overlay = () => {
  useEffect(() => {
    let overlay = document.getElementById("overlay")
    let aside = document.getElementById("sidebar")
    // let add_service_model = document.querySelector(".add_service_model")

    overlay.addEventListener("click", ()=>{
      overlay.style.display = "none"
      aside.classList.remove("show-sidebar")
      // add_service_model.style.display = "none"
    }
    )
  }, []);
  return (
    <div id="overlay"></div>
  )
}

export default Overlay