import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Cookies from "js-cookie";
import parseJwt from "./jwt";


const Loginform = () => {
  const router = useRouter()
  const [subemited, setSubemited] = useState(false);
  const [LoginError, setLoginError] = useState(false);
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
          const parse = parseJwt(res.data.authorisation.token);
          Cookies.set("state" , parse.user.role , { expires: 9999 })
          // console.log(parse.user);
          location.reload()

        })
        .catch((err) => {
          console.log(err);
          setSubemited(false);
          setLoginError(true);
        })
    }
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
        <label htmlFor="loginPass">Password</label>
        <input
          type="text"
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
