import styled from "styled-components";
import { BoldText, pxToVh, pxToVw, RegularText } from "./theme";
import MainStyle from "./main";

const Test = {};

Test.PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${pxToVh(36)};
  box-sizing: border-box;
`;

Test.PageNumber = styled(RegularText)`
  color: #000000;
  font-size: ${pxToVh(14)};
  margin-top: ${pxToVh(42)};
  text-align: right;
  width: 100%;
`;

Test.ProgressBar = styled.div`
  background: #f0ecdf;
  width: ${pxToVw(318)};
  height: ${pxToVh(6)};
  width: 100%;
  margin-top: ${pxToVh(6)};
  position: relative;
  border-radius: 10px;
`;

Test.ProgressStatus = styled.div`
  position: absolute;
  left: 0;
  height: ${pxToVh(6)};
  width: ${(props) => props.width * 100}%;
  background: var(--main-color);
  border-radius: 10px;
`;

Test.Question = styled(BoldText)`
  color: #000000;
  font-size: ${pxToVh(22)};
  margin-top: ${pxToVh(60)};
  text-align: center;
  width: 100%;
  line-height: ${pxToVh(30)};
  margin-bottom: ${pxToVh(129)};
`;

Test.AnswerBtn = styled(MainStyle.StartBtn)`
  font-size: ${pxToVh(13)};
  margin-bottom: ${pxToVh(14)};
  width: 100%;
  height: ${pxToVh(60)};
  line-height: ${pxToVh(21)};
`;

export default Test;
