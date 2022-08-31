import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Cookies from "js-cookie";
// import parseJwt from "./jwt";
import jwt_decode from "jwt-decode";


const Loginform = () => {
  const router = useRouter()
  const [subemited, setSubemited] = useState(false);
  const [LoginError, setLoginError] = useState(false);
  const [showPass, setShowPass] = useState(false)

  // function parseJwt(token) {
  //   if (!token) { return; }
  //   const base64Url = token.split('.')[1];
  //   const base64 = base64Url.replace('-', '+').replace('_', '/');
  //   return JSON.parse(window.atob(base64));
  // }

  useEffect(() => {
    let inpUser = document.getElementById("loginName");
    let inpPass = document.getElementById("loginPass");
    let btnSub = document.querySelector("button[type=submit]");
    let loginForm = document.querySelector(".loginForm");
    const formSubmit = () => {
      let USER_STATUS = {
        email: inpUser.value,
        password: inpPass.value,
      };
      setSubemited(true);
      axios
        .post(
          "https://stormy-chamber-88256.herokuapp.com/api/login",
          USER_STATUS,
          )
        .then((res) => {
          setLoginError(false)
          console.log(res.data);
          Cookies.set("token", res.data.authorisation.token, { expires: 9999 })
          Cookies.set("log" , true , { expires: 9999 })
          const parse = jwt_decode(res.data.authorisation.token);
          Cookies.set("state" , parse.user.role , { expires: 9999 })
          // console.log(parse.user.role);
          location.reload()

        })
        .catch((err) => {
          console.log(err);
          setSubemited(false);
          setLoginError(true);
        })
    }
    let showpass = document.querySelector(".label-pass .eye")
    showpass.addEventListener("click", () => {
      setShowPass(current => !current);
    })
    loginForm.onsubmit = (e) => {
      e.preventDefault();
      formSubmit();
    };
  }, [router]);
  return (
    <form className="bord-2 round shadow loginForm">
      <h4>Log In</h4>
      {LoginError && (
        <div className="alert alert-danger p-2" role="alert">
          <strong>Error!</strong> email or password in incorrect. Try again.
        </div>
      )}
      <div>
        <label htmlFor="loginName">Email</label>
        <input
          type="email"
          name="email"
          id="loginName"
          className="bg-light bord"
          required
        />
      </div>
      <div>
        <label htmlFor="loginPass" className="label-pass">
          Password
          <span className="eye">
            {showPass ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
          </span>
          </label>
        <input
          type={showPass ? "text" : "password"}
          name="password"
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
