import { useEffect } from "react"

const Overlay = () => {
  useEffect(() => {
    let overlay = document.getElementById("overlay")
    let aside = document.querySelector("aside")

    overlay.addEventListener("click", ()=>{
      overlay.style.display = "none"
      sidebar.classList.remove("show-sidebar")
    }
    )
  }, []);
  return (
    <div id="overlay"></div>
  )
}

export default Overlay