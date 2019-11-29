// 第一个文件 -Axios 封装
import config from "../config";
import Axios from "axios";
import Store from "../model/storage";

let headers = {};
if (Store.get("tolink")) {
  headers = {
    token: Store.get("tolink").token
  };
} else {
  headers = {};
}

// import { reject } from 'q'
//定义HTTP类
class HTTP {
  //HTTP下面的方法
  request(params) {
    return new Promise((resolve, reject) => {
      Axios({
        method: params.type || "get",
        url: config.baseUrl + params.url,
        data: params.data,
        headers: headers
      })
        .then(res => {
          if (!res.code) {
            console.log("请求成功");
          }
          resolve(res);
        })
        .then(err => {
          reject(err);
        });
    });
  }
}
export default HTTP;
