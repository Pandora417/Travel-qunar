export default {
  changeCity (state,city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (error) {
      console.log("缓存出错")
    }
  }
}