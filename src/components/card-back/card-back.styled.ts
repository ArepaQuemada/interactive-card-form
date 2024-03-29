import styled from "styled-components";
import { mediaQueries } from "../../media-queries";

export const CardBackWrapper = styled.div`
  position: absolute;
  text-align: end;
  transform: translate(1em);

  @media ${mediaQueries.desktop} {
    position: relative;
    transform: translate(14vw, 25em);
    z-index: 1;
  }
`;

export const CodeNumber = styled.span`
  font-size: 14px;
  letter-spacing: 1px;
  display: block;
  position: absolute;
  top: 45%;
  right: 12%;

  @media ${mediaQueries.desktop} {
    font-size: 16px;
  }
`;
