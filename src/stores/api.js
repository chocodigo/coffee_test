import axios from "axios";
import { observable, action, makeObservable } from "mobx";

class ApiRepository {
  constructor() {
    // makeObservable(this);
    this.API_HOST = "http://cappl.co.kr/cpti/";
  }

  connectServer = (method, url, data = {}) => {
    return axios(
      { method, url: this.API_HOST + url, data },
      {
        withCredentials: true, // 클라이언트와 서버가 통신할때 쿠키와 같은 인증 정보 값을 공유하겠다는 설정
      }
    ).then(
      action((res) => {
        return res;
      })
    );
  };

  // 현재 테스트 사용자 수
  getTestUserNumber = () => {
    let url = "result";
    return this.connectServer("get", url);
  };

  // 공유하기 이용자 수
  getShareUserNumber = () => {
    let url = "share";
    return this.connectServer("get", url);
  };
}

export default ApiRepository;
