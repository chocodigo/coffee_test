import React from "react";
import styled from "styled-components";
import { pxToVw, pxToVh, Title, RegularText, BoldText } from "../styles/theme";
import useStores from "../stores/useStores";
import { observer } from "mobx-react";
import CapplStore from "../stores/cappl";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const IntroHeader = styled(Title)`
  font-size: ${pxToVh(39)};
  color: var(--main-color);
  margin-top: ${pxToVh(74)};
`;

const ExplainText = styled(RegularText)`
  font-size: ${pxToVh(16)};
  color: #000000;
  margin-top: ${pxToVh(23)};
  text-align: center;
  line-height: ${pxToVh(22)};
`;

const IntroImage = styled.img.attrs({ src: "/image/intro.svg" })`
  margin-top: ${pxToVh(26)};
  width: ${pxToVw(242)};
  height: ${pxToVh(254)};
`;

const StartBtn = styled.div`
  width: ${pxToVw(242)};
  height: ${pxToVh(84)};
  background: var(--main-color);
  border-radius: 10px;
  margin-top: ${pxToVh(46)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const StartText = styled(BoldText)`
  font-size: ${pxToVh(21)};
`;

const StartExplainText = styled(RegularText)`
  margin-top: ${pxToVh(11)};
  font-size: ${pxToVh(12)};
  max-width: ${pxToVw(192)};
`;

const ShareWrapper = styled.div`
  margin-top: ${pxToVh(28)};
  display: flex;
  align-items: center;
`;

const ShareText = styled(RegularText)`
  font-size: ${pxToVh(12)};
`;

const ShareImage = styled.img.attrs({ src: "/image/share.svg" })`
  margin-left: ${pxToVw(10)};
  margin-right: ${pxToVw(10)};
  width: ${pxToVw(14)};
  height: ${pxToVh(14)};
`;

const ShareIconList = styled.div`
  display: flex;
  margin-top: ${pxToVh(18)};
`;

const ShareIcon = styled.img`
  width: ${pxToVw(38)};
  height: ${pxToVh(38)};
  &:not(:last-child) {
    margin-right: ${pxToVw(10)};
  }
`;

const shareList = [
  {
    id: "kakao",
    src: "/image/kakao.svg",
  },
  {
    id: "insta",
    src: "/image/insta.svg",
  },
  {
    id: "facebook",
    src: "/image/facebook.svg",
  },
  {
    id: "twitter",
    src: "/image/twitter.svg",
  },
  {
    id: "share_link",
    src: "/image/share_link.svg",
  },
];

const Main = observer(() => {
  const { capplStore } = useStores();
  return (
    <MainWrapper>
      <IntroHeader>커피 유형 테스트</IntroHeader>
      <ExplainText>
        바쁘다 바빠 카페라이프, <br /> 나는 어떤 유형일까?
      </ExplainText>
      <IntroImage />
      <StartBtn>
        <StartText>테스트 시작하기</StartText>
        <StartExplainText>
          지금까지 {capplStore.people}명이 참여했어요
        </StartExplainText>
      </StartBtn>
      <ShareWrapper>
        <ShareText>테스트 공유하기</ShareText>
        <ShareImage />
        <ShareText>{capplStore.sharePeople}</ShareText>
      </ShareWrapper>
      <ShareIconList>
        {shareList.map((item) => {
          return <ShareIcon src={item.src} key={item.id} />;
        })}
      </ShareIconList>
    </MainWrapper>
  );
});

export default Main;
