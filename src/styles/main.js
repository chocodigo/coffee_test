import styled from "styled-components";
import { BoldText, pxToVh, pxToVw, RegularText, Title } from "./theme";

const MainStyle = {};

MainStyle.MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-x: hidden;
`;

//커피 유형 테스트
MainStyle.IntroHeader = styled(Title)`
  font-size: ${pxToVh(39)};
  color: var(--main-color);
  margin-top: ${pxToVh(74)};
`;

// 바쁘다 바빠
MainStyle.ExplainText = styled(RegularText)`
  font-size: ${pxToVh(16)};
  color: #000000;
  margin-top: ${pxToVh(23)};
  text-align: center;
  line-height: ${pxToVh(22)};
`;

// 메인 화면 이미지
MainStyle.IntroImage = styled.img.attrs({ src: "/image/intro.svg" })`
  margin-top: ${pxToVh(26)};
  width: ${pxToVw(242)};
  height: ${pxToVh(254)};
`;

//시작버튼
MainStyle.StartBtn = styled.div`
  width: ${pxToVw(242)};
  height: ${pxToVh(84)};
  background: var(--main-color);
  border-radius: 10px;
  &.main_start_btn {
    margin-top: ${pxToVh(46)};
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background: #05634f;
  }
  &:active {
    background: #054463;
  }
`;

//버튼 텍스트 (큰)
MainStyle.StartText = styled(BoldText)`
  font-size: ${pxToVh(21)};
`;

// 버튼 텍스트 (작은)
MainStyle.StartExplainText = styled(RegularText)`
  margin-top: ${pxToVh(11)};
  font-size: ${pxToVh(12)};
  max-width: ${pxToVw(192)};
`;

MainStyle.ShareWrapper = styled.div`
  margin-top: ${pxToVh(28)};
  display: flex;
  align-items: center;
`;

MainStyle.ShareText = styled(RegularText)`
  font-size: ${pxToVh(12)};
`;

MainStyle.ShareImage = styled.img.attrs({ src: "/image/share.svg" })`
  margin-left: ${pxToVw(10)};
  margin-right: ${pxToVw(10)};
  width: ${pxToVw(14)};
  height: ${pxToVh(14)};
`;

MainStyle.ShareIconList = styled.div`
  display: flex;
  margin-top: ${pxToVh(18)};
`;

MainStyle.ShareIcon = styled.img`
  width: ${pxToVw(38)};
  height: ${pxToVh(38)};
  &:not(:last-child) {
    margin-right: ${pxToVw(10)};
  }
`;

MainStyle.LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #00474c;
`;

MainStyle.LoadingImg = styled.img.attrs({ src: "/image/loading.svg" })`
  width: ${pxToVw(196)};
  height: ${pxToVh(196)};
  margin-bottom: ${pxToVh(24)};
`;

MainStyle.LoadingText = styled(RegularText)`
  font-size: %{pxToVh(15)};
  color: #EAEAEA;
`;

export default MainStyle;
