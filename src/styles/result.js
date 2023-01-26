import styled from "styled-components";
import { BoldText, pxToVh, pxToVw, RegularText } from "./theme";
import MainStyle from "./main";

const ResultStyle = {};

ResultStyle.MainTitle = styled(RegularText)`
  margin-top: ${pxToVh(28)};
  width: ${pxToVw(126)};
  height: ${pxToVh(20)};
  background: #f0ecdf;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: ${pxToVh(14)};
`;

ResultStyle.Title = styled(MainStyle.IntroHeader)`
  font-size: ${pxToVh(28)};
  margin-top: ${pxToVh(21)};
`;

ResultStyle.BigImage = styled.img`
  width: ${pxToVw(330)};
  height: ${pxToVh(300)};
  margin-top: ${pxToVh(26)};
`;

ResultStyle.Contents = styled.div`
  border: #00474c solid 2px;
  border-radius: 12px;
  width: ${pxToVw(340)};
  padding: ${pxToVh(32)} ${pxToVw(26)};
  box-sizing: border-box;
  text-align: center;
  margin-top: ${pxToVh(16)};
`;

ResultStyle.ContentsTitle = styled(BoldText)`
  font-size: ${pxToVh(22)};
  color: #ff9100;
  line-height: ${pxToVh(30)};
`;

ResultStyle.ContentsList = styled.ul`
  margin-top: ${pxToVh(25)};
  text-align: left;
`;

ResultStyle.ContentsItem = styled(RegularText)`
  margin-top: ${pxToVh(23)};
  font-size: ${pxToVh(15)};
  line-height: ${pxToVh(22)};
  display: flex;
  position: relative;
  padding-left: ${pxToVw(7)};
  box-sizing: border-box;
  &:before {
    content: "";
    width: ${pxToVw(4)};
    height: ${pxToVh(4)};
    background: #000000;
    border-radius: 100%;
    position: absolute;
    top: ${pxToVh(7)};
    left: ${pxToVw(-7)};
  }
`;

ResultStyle.LikeHateWrapper = styled.div`
  display: flex;
  ${ResultStyle.Contents} {
    width: ${pxToVw(164)};
    //height: ${pxToVh(216)};
    padding: ${pxToVh(14)} 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    align-items: center;
    &:first-child {
      margin-right: ${pxToVw(12)};
    }
    ${ResultStyle.ContentsTitle} {
      color: #00474c;
      font-size: ${pxToVh(13)};
      line-height: normal;
      &.result_title {
        font-size: ${pxToVh(16)};
        margin-top: ${pxToVh(12)};
      }
    }
    img {
      width: ${pxToVw(160)};
      height: ${pxToVh(134)};
      margin-top: ${pxToVh(8)};
    }
  }
`;

ResultStyle.replayBtn = styled(MainStyle.StartBtn)`
  width: ${pxToVw(340)};
  height: ${pxToVh(64)};
  margin-top: ${pxToVh(36)};
  margin-bottom: ${pxToVh(30)};
  flex-direction: row;
  ${RegularText} {
    font-size: ${pxToVh(20)};
    margin-right: ${pxToVw(11)};
  }
  img {
    width: ${pxToVw(22)};
    height: ${pxToVh(22)};
  }
`;

export default ResultStyle;
