import Cookies from 'js-cookie'

export const LOCAL_STORAGE = {
  JWT_TOKEN: "JWT_TOKEN"
}

export const updateCookie = (key: string, value: any) => {
  Cookies.set(key, value, { expires: 30 })

}

export const getCookie = (key: string) => {
  const cookie =  Cookies.get(key);
  return cookie == undefined ? '' : cookie;
}

export const deleteCookie = (key: string) => {
  Cookies.remove(key);
}