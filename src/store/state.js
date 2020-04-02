let defaultCity = '黄梅'
try {
  if (localStorage.city){
    defaultCity = localStorage.city
  }
} catch (e) {
  console.log("缓存出错")
}

export default {
  city:defaultCity
}