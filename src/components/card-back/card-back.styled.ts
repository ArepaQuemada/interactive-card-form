import styled from "styled-components";
import { mediaQueries } from "../../media-queries";

export const CardBackWrapper = styled.div`
  position: absolute;
  left: 4rem;
  text-align: end;

  @media ${mediaQueries.desktop} {
    bottom: 22vh;
    left: 25vw;
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
