import "../styles/globals.css";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const [log, setLog] = useState(false);

  let router = useRouter()

  useEffect(() => {
    let token = Cookies.get("token")

    
    if (token) {
      const refresh = () => {
        axios.post("https://stormy-chamber-88256.herokuapp.com/api/refresh",token, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }).then((res) => {
          Cookies.set(res.data.authorization.token)
        }).catch((err) => {
          console.log(err);
        })
      }
  
      refresh();
  
      setTimeout(() => {
        refresh();
      }, 10*60*1000);
      setLog(true);
      Cookies.set("log", log, { expires: 9999 });
    } else {
      setLog(false)
      Cookies.set("log", log, { expires: 9999 });
    }
  }, [log]);

  return <Component {...pageProps} />;
}
