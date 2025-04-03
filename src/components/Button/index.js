import styled from "styled-components";

import { PRIMARY, SECONDARY, TERTIARY } from "../Constants";

const colorMap = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  min-width: 200px;
  border-radius: 4px;

  background: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  font-weight: bold;
  font-size: 18px;
  border: none;
  padding: 16px 24px;

  border: ${({ type = "TERTIARY" }) =>
    (colorMap[type] || colorMap["TERTIARY"]).BUTTON.DEFAULT.BORDER};

  &:hover {
    background: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    border: ${({ type }) =>
      type === "TERTIARY"
        ? `1px solid ${TERTIARY.BUTTON.HOVER.BORDER}`
        : "none"};
  }
  &:active {
    background: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    border: ${({ type }) =>
      type === "TERTIARY"
        ? `1px solid ${TERTIARY.BUTTON.PRESSED.BORDER}`
        : "none"};
  }
  &:disabled {
    background: ${({ type }) => colorMap[type].BUTTON.DISABLED.BACKGROUND};
    color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
    border: ${({ type }) =>
      type === "TERTIARY"
        ? `1px solid ${TERTIARY.BUTTON.DISABLED.BORDER}`
        : "none"};
  }
`;

export default Button;
