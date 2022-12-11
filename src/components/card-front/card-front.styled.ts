import styled from "styled-components";
import { mediaQueries } from "../../media-queries";

export const CardFrontWrapper = styled.div`
  position: absolute;
  bottom: -3rem;
  z-index: 2;

  @media ${mediaQueries.desktop} {
    bottom: 50vh;
    left: 20vw;
  }
`;
