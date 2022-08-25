import '../styles/globals.css'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  const [log, setLog] = useState(false)
  useEffect(() => {
    if (Cookies.get("token")) {
      setLog(true)
    }
    Cookies.set("log" , log , { expires: 9999 })
  }, [log]);
  return (
      <Component {...pageProps} />
  )}