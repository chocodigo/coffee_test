import React, { Fragment, useEffect } from "react";
import useStores from "../stores/useStores";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import MainStyle from "../styles/main";
import ShareIcon from "../components/ShareIcon";

export const shareList = [
  {
    id: "kakao",
    src: "/image/kakao.svg",
  },
  // {
  //   id: "insta",
  //   src: "/image/insta.svg",
  // },
  // {
  //   id: "facebook",
  //   src: "/image/facebook.svg",
  // },
  // {
  //   id: "twitter",
  //   src: "/image/twitter.svg",
  // },
  {
    id: "link",
    src: "/image/share_link.svg",
  },
];

const Main = observer(() => {
  const { capplStore } = useStores();

  const navigate = useNavigate();

  useEffect(() => {
    capplStore.getTestUserNumber();
    capplStore.getSharePeopleNumber();
  }, []);

  // 시작 버튼 클릭
  const startBtnHandler = () => {
    navigate("/input-page");
  };

  return (
    <MainStyle.MainWrapper>
      <MainStyle.IntroHeader>커피 유형 테스트</MainStyle.IntroHeader>
      <MainStyle.ExplainText>
        바쁘다 바빠 카페라이프, <br /> 나는 어떤 유형일까?
      </MainStyle.ExplainText>
      <MainStyle.IntroImage />
      <MainStyle.StartBtn
        onClick={startBtnHandler}
        className={"main_start_btn"}
      >
        <MainStyle.StartText>테스트 시작하기</MainStyle.StartText>
        <MainStyle.StartExplainText>
          지금까지 {capplStore.people}명이 참여했어요
        </MainStyle.StartExplainText>
      </MainStyle.StartBtn>
      <MainStyle.ShareWrapper>
        <MainStyle.ShareText>테스트 공유하기</MainStyle.ShareText>
        <MainStyle.ShareImage />
        <MainStyle.ShareText>{capplStore.sharePeople}</MainStyle.ShareText>
      </MainStyle.ShareWrapper>
      <MainStyle.ShareIconList>
        {shareList.map((item) => {
          return (
            <Fragment key={`main_${item.id}`}>
              <ShareIcon item={item} />
            </Fragment>
          );
        })}
      </MainStyle.ShareIconList>
    </MainStyle.MainWrapper>
  );
});

export default Main;
