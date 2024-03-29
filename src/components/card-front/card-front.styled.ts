import styled from "styled-components";
import { mediaQueries } from "../../media-queries";

export const CardFrontWrapper = styled.div`
  z-index: 1;
  position: absolute;
  transform: translate(-2em, 6em);
  @media ${mediaQueries.desktop} {
    transform: translate(10vw, 7em);
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
  letter-spacing: 0.2rem;
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
