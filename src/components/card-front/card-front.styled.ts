import styled from "styled-components";
import { mediaQueries } from "../../media-queries";

export const CardFrontWrapper = styled.div`
  position: absolute;
  bottom: -5vh;
  z-index: 2;

  @media ${mediaQueries.desktop} {
    bottom: 50vh;
    left: 20vw;
  }
`;

export const CircleSvg = styled.img`
  max-width: 3rem;

  @media ${mediaQueries.desktop} {
    max-width: 5rem;
  }
`;

export const NumberSection = styled.div`
  margin-top: 2.5rem;
  text-align: center;
`;

export const DateAndNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardNumber = styled.span`
  letter-spacing: 3px;
  font-weight: 400;

  @media ${mediaQueries.desktop} {
    font-size: 24px;
  }
`;

export const SmallSection = styled.small`
  margin-top: 1.3rem;
  display: block;
  font-size: 11px;

  @media ${mediaQueries.desktop} {
    font-size: 14px;
    margin-top: 2.4rem;
  }
`;
