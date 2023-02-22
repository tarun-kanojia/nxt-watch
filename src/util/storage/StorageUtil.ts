import Cookies from 'js-cookie'



export const updateCookie = (key: string, value: any) => {
  Cookies.set(key, value, { expires: 30 })

}

export const getCookie = (key: string) => {
  const cookie =  Cookies.get(key);
  // console.log(cookie)
  return (cookie === undefined ? '' : cookie);
}

export const deleteCookie = (key: string) => {
  Cookies.remove(key);
}