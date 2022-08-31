import jwtDecode from "jwt-decode"
import Cookies from "js-cookie"

export const User = () => {
  const parse = jwtDecode(Cookies.get("token"))
  const data = parse.user;
  return data;
}