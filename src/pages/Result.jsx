import React, { Fragment, useEffect, useState } from "react";
import useStores from "../stores/useStores";
import { observer } from "mobx-react";
import { resultList } from "../data";
import MainStyle from "../styles/main";
import ResultStyle from "../styles/result";
import { shareBtnHandler, shareList } from "./Main";
import { RegularText } from "../styles/theme";
import { useNavigate } from "react-router-dom";
import ShareIcon from "../components/ShareIcon";

const Result = observer(() => {
  const { capplStore } = useStores();
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname.split("result/");
    const id = path[1];

    capplStore.setResultId(id * 1);

    capplStore.getSharePeopleNumber();
  }, []);

  const replayBtnHandler = () => {
    navigate(`/`);
  };

  return (
    <>
      {capplStore.currentResult ? (
        <MainStyle.MainWrapper>
          <ResultStyle.MainTitle>어울리는 음료</ResultStyle.MainTitle>
          <ResultStyle.Title>
            {capplStore.currentResult.title}
          </ResultStyle.Title>
          <ResultStyle.BigImage
            src={`${process.env.PUBLIC_URL}/image/result/${capplStore.currentResult.id}.svg`}
          />
          <ResultStyle.Contents>
            <ResultStyle.ContentsTitle>
              {capplStore.currentResult.sub_title}
            </ResultStyle.ContentsTitle>
            <ResultStyle.ContentsList>
              {capplStore.currentResult.contents.map((item, index) => (
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
                src={`${process.env.PUBLIC_URL}/image/like_hate/${capplStore.currentResult.like}.svg`}
              />
              <ResultStyle.ContentsTitle className={"result_title"}>
                {resultList[capplStore.currentResult.like - 1].title}
              </ResultStyle.ContentsTitle>
            </ResultStyle.Contents>
            <ResultStyle.Contents>
              <ResultStyle.ContentsTitle>
                나와 안 맞는 유형
              </ResultStyle.ContentsTitle>
              <img
                src={`${process.env.PUBLIC_URL}/image/like_hate/${capplStore.currentResult.hate}.svg`}
              />
              <ResultStyle.ContentsTitle className={"sresult_title"}>
                {resultList[capplStore.currentResult.hate - 1].title}
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
                <Fragment key={`result_${item.id}`}>
                  <ShareIcon item={item} />
                </Fragment>
              );
            })}
          </MainStyle.ShareIconList>
          <ResultStyle.replayBtn onClick={replayBtnHandler}>
            <RegularText>다시하기</RegularText>{" "}
            <img src={`${process.env.PUBLIC_URL}/image/replay.svg`} />
          </ResultStyle.replayBtn>
        </MainStyle.MainWrapper>
      ) : (
        <></>
      )}
    </>
  );
});

export default Result;
