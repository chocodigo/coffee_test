import React, { useEffect, useState } from "react";
import MainStyle from "../styles/main";
import { useNavigate } from "react-router-dom";
import { resultList } from "../data";
import useStores from "../stores/useStores";

const Loading = () => {
  const navigate = useNavigate();
  const { capplStore } = useStores();

  setTimeout(() => {
    navigate(`/result/${capplStore.resultId}`);
  }, 1.5 * 1000);

  useEffect(() => {
    capplStore.setResultId();
    capplStore.countTestUserNumber();
  }, []);

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
