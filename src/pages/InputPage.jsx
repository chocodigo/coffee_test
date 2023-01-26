import React, { useState } from "react";
import { observer } from "mobx-react";
import Input from "../styles/inputPages";
import MainStyle from "../styles/main";
import useStores from "../stores/useStores";
import { useNavigate } from "react-router-dom";

const InputPage = observer(() => {
  const { capplStore } = useStores();

  const navigate = useNavigate();

  let info = {};

  const [gender, setGender] = useState("M");

  // 성별 클릭
  const genderClickHandler = (e, _gender) => {
    setGender(_gender);
  };
  // 확인 버튼 클릭
  const ConfirmClickHandler = () => {
    const name = document.querySelector(".name").value;
    const birth = document.querySelector(".birth").value;

    // 생년월일 정규식
    const birthCheck = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/;
    if (name === "" || birth === "") {
      alert("정보를 모두 입력해주세요");
    } else if (!birthCheck.test(birth)) {
      alert("생년월일을 정확히 입력해주세요");
    } else {
      info = { name, birth, gender };
      capplStore.setInfo(info);

      navigate("/test-page");
    }
  };

  return (
    <MainStyle.MainWrapper>
      <Input.Title>정보입력</Input.Title>
      <Input.Explain>테스트를 위해 정보를 알려주세요!</Input.Explain>
      <Input.input className={"name"} placeholder={"이름을 입력해주세요."} />
      <Input.input
        className={"birth"}
        placeholder={"생년월일을 입력해주세요. (ex. 920311)"}
      />
      <Input.input as={"div"}>
        <Input.SelectBtn
          className={gender === "M" ? "on" : ""}
          onClick={(e) => genderClickHandler(e, "M")}
        >
          남성
        </Input.SelectBtn>
        <Input.SelectBtn
          className={gender === "W" ? "on" : ""}
          onClick={(e) => genderClickHandler(e, "W")}
        >
          여성
        </Input.SelectBtn>
      </Input.input>
      <Input.Warning>
        입력하신 정보는 본 퀴즈 및 통계 이외의 용도로 사용하지 않습니다.
      </Input.Warning>
      <Input.ConfirmBtn onClick={ConfirmClickHandler}>확인</Input.ConfirmBtn>
    </MainStyle.MainWrapper>
  );
});

export default InputPage;
