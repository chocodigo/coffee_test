import styled from "styled-components";
import { BoldText, pxToVh, pxToVw, RegularText } from "./theme";
import MainStyle from "./main";

const Input = {};

Input.PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${pxToVh(26)};
  box-sizing: border-box;
`;

// 정보입력
Input.Title = styled(BoldText)`
  font-size: ${pxToVh(21)};
  margin-top: ${pxToVh(71)};
`;

// 정보입력 세부설명
Input.Explain = styled(RegularText)`
  font-size: ${pxToVh(14)};
  margin-top: ${pxToVh(9)};
  color: #b5b5b5;
  margin-bottom: ${pxToVh(26)};
`;

Input.input = styled.input.attrs({ required: true })`
  font-family: var(--font-helvetica-regular);
  width: ${pxToVw(345)};
  height: ${pxToVh(50)};
  background: #f0f0f0;
  border-radius: 10px;
  margin-bottom: ${pxToVh(8)};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${pxToVh(4)} ${pxToVw(4)};
  box-sizing: border-box;

  &::placeholder {
    color: #b5b5b5;
    text-align: center;
  }
`;

Input.SelectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  font-size: ${pxToVh(14)};
  color: #000000;
  width: ${pxToVw(164)};
  height: ${pxToVh(42)};
  cursor: pointer;
  &.on {
    background: #fff;
    box-shadow: 2px 2px 2px #7575757d;
    border-radius: 10px;
  }
`;

Input.Warning = styled(RegularText)`
  font-size: ${pxToVh(11)};
  margin-top: ${pxToVh(284)};
  color: #5b5b5b;
`;

Input.ConfirmBtn = styled(MainStyle.StartBtn)`
  font-size: ${pxToVh(20.52)};
  margin-top: ${pxToVh(13)};
  margin-bottom: ${pxToVh(68)};
  width: ${pxToVw(340)};
  height: ${pxToVh(60)};
`;
export default Input;
