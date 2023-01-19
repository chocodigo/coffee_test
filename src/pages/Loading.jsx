import React from "react";
import MainStyle from "../styles/main";

const Loading = () => {
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
