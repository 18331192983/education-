import HTTP from "../utils/http";
const _http = new HTTP();
class Move {
  //一级菜单
  list_home() {
    return _http.request({
      type: "post",
      url: "apis/system/pc/menu/user/list",
      data: {}
    });
  }
}

export default Move;
