import { useState, useEffect } from "react";

const Loginform = () => {
  const [subemited, setSubemited] = useState(false);
  useEffect(() => {
    let inpUser = document.getElementById("loginName");
    let inpPass = document.getElementById("loginPass");
    let btnSub = document.querySelector("button[type=submit]");
    btnSub.onclick = () => {
      if (inpPass.value != "" && inpUser != "") {
        setSubemited(true);
      }
    };
  }, []);
  return (
    <form className="bord-2 round shadow">
      <h4>Log In</h4>
      <div>
        <label htmlFor="loginName">Username</label>
        <input
          type="text"
          name=""
          id="loginName"
          className="bg-light bord"
          required
        />
      </div>
      <div>
        <label htmlFor="loginPass">Password</label>
        <input
          type="password"
          name=""
          id="loginPass"
          className="bg-light bord"
          required
        />
      </div>
      <a>Forget Password</a>
      <button type="submit" className="bord-2 text-center">
        {subemited ? (
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          "Let's Go"
        )}
      </button>
    </form>
  );
};

export default Loginform;
