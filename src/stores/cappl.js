import { action, observable, makeObservable } from "mobx";
import ApiRepository from "./api";
import { questionList } from "../data";

export default class CapplStore {
  constructor() {
    makeObservable(this);
    this.API = new ApiRepository();
  }

  // API 콜백 템플릿
  @action.bound
  callApi = async (apiFunc, callback = null) => {
    const res = await apiFunc();
    try {
      if (!res || !res.data) {
        return { state: "error", msg: "pending" };
      }

      const resData = callback ? callback(res.data) : null;
      return {
        state: "done",
        resData,
      };
    } catch (e) {
      console.log(e);
      return { state: "error", msg: e.message };
    }
  };

  //참여자
  @observable people = 0;
  @action getTestUserNumber = () => {
    const callback = (data) => {
      this.people = data;
      console.log(data);
    };

    this.callApi(this.API.getTestUserNumber.bind(this), callback);
  };

  //공유자
  @observable sharePeople = 0;
  @action getSharePeopleNumber = () => {
    const callback = (data) => {
      this.sharePeople = data;
      console.log(data);
    };

    this.callApi(this.API.getShareUserNumber.bind(this), callback);
  };

  //테스트 정보
  @observable info = { name: "", birth: "", gender: "" };
  @action setInfo = (val) => (this.info = val);

  // 테스트 점수
  @observable score = 0;
  @action setScore = (val) => (this.score += val);

  // 현재 테스트 페이지
  @observable testPage = 1;
  @action setTestPage = (val) => (this.testPage = val);

  // 테스트 결과
  @observable testResult = Array.from(
    { length: questionList.length },
    () => -1
  );
  @action setTestResult = (val) => {
    this.testResult[this.testPage - 1] = val;
  };
}
