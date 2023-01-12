import { action, computed, configure, observable, when, toJS } from "mobx";

configure({ enforceActions: "observed" }); // enforceActions 모드에서는 오직 action만 mobx state를 변경할 수 있습니다.

export default class CapplStore {
  //참여자
  @observable people = 0;
  //공유자
  @observable sharePeople = 0;
}
