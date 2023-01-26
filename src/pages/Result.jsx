import React, { useEffect, useState } from "react";
import useStores from "../stores/useStores";
import { observer } from "mobx-react";
import { resultList } from "../data";
import MainStyle from "../styles/main";
import ResultStyle from "../styles/result";
import { shareBtnHandler, shareList } from "./Main";
import { RegularText } from "../styles/theme";

const Result = observer(() => {
  const { capplStore } = useStores();
  // const path = window.location.pathname.split("result/");
  // const id = path[1];
  const [currentResult, setCurrentResult] = useState(resultList[0]);

  useEffect(() => {
    const path = window.location.pathname.split("result/");
    const id = path[1];
    setCurrentResult(resultList[id - 1]);
  }, []);

  return (
    <MainStyle.MainWrapper>
      <ResultStyle.MainTitle>어울리는 음료</ResultStyle.MainTitle>
      <ResultStyle.Title>{currentResult.title}</ResultStyle.Title>
      <ResultStyle.BigImage
        src={`${process.env.PUBLIC_URL}/image/result/${currentResult.id}.svg`}
      />
      <ResultStyle.Contents>
        <ResultStyle.ContentsTitle>
          {currentResult.sub_title}
        </ResultStyle.ContentsTitle>
        <ResultStyle.ContentsList>
          {currentResult.contents.map((item, index) => (
            <ResultStyle.ContentsItem as={"li"} key={`contents_${index}`}>
              {item}
            </ResultStyle.ContentsItem>
          ))}
        </ResultStyle.ContentsList>
      </ResultStyle.Contents>
      <ResultStyle.LikeHateWrapper>
        <ResultStyle.Contents>
          <ResultStyle.ContentsTitle>
            나와 잘 맞는 유형
          </ResultStyle.ContentsTitle>
          <img
            src={`${process.env.PUBLIC_URL}/image/like_hate/${currentResult.like}.svg`}
          />
          <ResultStyle.ContentsTitle className={"result_title"}>
            {resultList[currentResult.like - 1].title}
          </ResultStyle.ContentsTitle>
        </ResultStyle.Contents>
        <ResultStyle.Contents>
          <ResultStyle.ContentsTitle>
            나와 안 맞는 유형
          </ResultStyle.ContentsTitle>
          <img
            src={`${process.env.PUBLIC_URL}/image/like_hate/${currentResult.hate}.svg`}
          />
          <ResultStyle.ContentsTitle className={"result_title"}>
            {resultList[currentResult.hate - 1].title}
          </ResultStyle.ContentsTitle>
        </ResultStyle.Contents>
      </ResultStyle.LikeHateWrapper>
      <MainStyle.ShareWrapper>
        <MainStyle.ShareText>테스트 공유하기</MainStyle.ShareText>
        <MainStyle.ShareImage />
        <MainStyle.ShareText>{capplStore.sharePeople}</MainStyle.ShareText>
      </MainStyle.ShareWrapper>
      <MainStyle.ShareIconList>
        {shareList.map((item) => {
          return (
            <MainStyle.ShareIcon
              src={item.src}
              key={item.id}
              onClick={(e) => shareBtnHandler(e, item)}
              id={item.id === "kakao" ? "kakaotalk-sharing-btn" : item.id}
            />
          );
        })}
      </MainStyle.ShareIconList>
      <ResultStyle.replayBtn>
        <RegularText>다시하기</RegularText>{" "}
        <img src={`${process.env.PUBLIC_URL}/image/replay.svg`} />
      </ResultStyle.replayBtn>
    </MainStyle.MainWrapper>
  );
});

export default Result;
