import Cookies from "js-cookie";

export const setToken = (token) => {
  Cookies.set("token", token, { sameSite: "none", secure: true });
};

export const getToken = () => {
  return Cookies.get("token", { sameSite: "none", secure: true });
};

export const removeToken = () => {
  return Cookies.remove("token", { sameSite: "none", secure: true });
};
