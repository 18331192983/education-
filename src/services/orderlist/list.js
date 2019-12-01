import HTTP from "../../utils/http";
const _http = new HTTP();
class List {
  //一级菜单
  lists(obj) {
    return _http.request({
      type: "post",
      url: "/apis/course/pc/order/info/list",
      data: {
        pageCurrent: obj,
        pageSize: 20
      }
    });
  }
}

export default List;
