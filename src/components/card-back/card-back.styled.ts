import styled from "styled-components";
import { mediaQueries } from "../../media-queries";

export const CardBackWrapper = styled.div`
  position: absolute;
  left: 4rem;

  @media ${mediaQueries.desktop} {
    bottom: 22vh;
    left: 25vw;
  }
`;
