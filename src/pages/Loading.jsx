import React from "react";
import MainStyle from "../styles/main";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/result");
  }, 1.5 * 1000);

  return (
    <MainStyle.LoadingWrapper>
      <MainStyle.LoadingImg />
      <MainStyle.LoadingText>
        나와 어울리는 음료 이름은 ...
      </MainStyle.LoadingText>
    </MainStyle.LoadingWrapper>
  );
};

export default Loading;
