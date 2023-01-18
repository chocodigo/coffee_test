import styled from "styled-components";

export const pxToVw = (width) => {
  return `${(width * 100) / window.innerWidth}vw`;
};

export const pxToVh = (height) => {
  return `${(height * 100) / window.innerHeight}vh`;
};

export const Title = styled.span`
  font-family: var(--font-black-han-sans-regular);
`;

export const BoldText = styled.span`
  font-family: var(--font-helvetica-bold);
  font-weight: bold;
`;

export const RegularText = styled.span`
  font-family: var(--font-helvetica-regular);
`;
