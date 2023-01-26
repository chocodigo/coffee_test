import React, { useEffect, useState } from "react";
import MainStyle from "../styles/main";
import { useNavigate } from "react-router-dom";
import { resultList } from "../data";
import useStores from "../stores/useStores";

const Loading = () => {
  const navigate = useNavigate();
  const { capplStore } = useStores();

  const [resultId, setResultId] = useState(1);
  setTimeout(() => {
    navigate(`/result/${resultId}`);
  }, 1.5 * 1000);

  useEffect(() => {
    const resultData = resultList.find(
      (item) =>
        item.score_min < capplStore.score && item.score_max >= capplStore.score
    );
    setResultId(resultData.id);
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
