



import HTTP from '../utils/http'
const _http = new HTTP()
class Move {
  banner () {
    return _http.request({
      url: "small4/banner/list",
    })
  }
  //登录
  register (obj) {
    return _http.request({
      type: 'post',
      url: 'apis/user/pc/api/user/login/password',    
      data: {
        clientId: obj.clientId,
        ip: obj.ip,
        mobile:obj.mobile,
        password: obj.password,
      }
   })
  }
}

export default Move