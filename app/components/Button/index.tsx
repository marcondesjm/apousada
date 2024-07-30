"use client";

import styled from "styled-components";
import { CssVars, ButtonVariant } from "../../components/GlobalStyles/enums";

interface IButtonProps {
  $variant?: ButtonVariant;
  $fullWidth?: boolean;
  $fillHeight?: {
    max: string;
  };
}

const Button = styled.button<IButtonProps>`
  display: inline-flex;
  max-height: ${({ $fillHeight }) => ($fillHeight ? $fillHeight.max : "unset")};
  height: ${({ $fillHeight }) => ($fillHeight ? "100vh" : "unset")};
  padding: 8px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: ${({ $fullWidth }) => ($fullWidth ? 0 : "8px")};
  border: 2px solid
    var(
      ${({ $variant }) =>
        $variant === ButtonVariant.GREEN ||
        $variant === ButtonVariant.OUTLINE_GREEN ||
        $variant === ButtonVariant.OUTLINE_GREEN_TEXT
          ? CssVars.GREEN_600
          : CssVars.BLUE_400}
    );
  background: var(
    ${({ $variant }) =>
      $variant && $variant === ButtonVariant.GREEN
        ? CssVars.GREEN_600
        : $variant && [1, 2, 4, 5].includes($variant)
        ? CssVars.TRANSPARENT
        : CssVars.DEFAULT}
  );
  /* color: var(
    ${({ $variant }) =>
      $variant && [1, 4].includes($variant)
        ? CssVars.WHITE
        : $variant && $variant === ButtonVariant.OUTLINE_BLUE_TEXT
        ? CssVars.BLUE_900
        : $variant && $variant === ButtonVariant.OUTLINE_GREEN_TEXT
        ? CssVars.GREEN_900
        : CssVars.WHITE}
  ); */
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    background: var(
      ${({ $variant }) =>
        $variant && [1, 2].includes($variant)
          ? CssVars.DEFAULT
          : $variant && [3].includes($variant)
          ? CssVars.GREEN_900
          : $variant && [4, 5].includes($variant)
          ? CssVars.GREEN_600
          : CssVars.DEFAULT_DARK}
    );

    color: var(${CssVars.WHITE});
  }
`;

export default Button;
