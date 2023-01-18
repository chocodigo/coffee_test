import { action, observable, makeObservable } from "mobx";

export default class CapplStore {
  constructor() {
    makeObservable(this);
  }
  //참여자
  @observable people = 0;
  //공유자
  @observable sharePeople = 0;

  //테스트 정보
  @observable info = { name: "", birth: "", gender: "" };
  @action setInfo = (val) => (this.info = val);

  // 테스트 점수
  @observable score = 0;
  @action setScore = (val) => (this.score += val);

  // 현재 테스트 페이지
  @observable testPage = 1;
  @action setTestPage = (val) => (this.testPage = val);
}
