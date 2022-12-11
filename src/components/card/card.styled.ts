import styled from "styled-components";
import { mediaQueries } from "../../media-queries";

export const BaseCardWrapper = styled.div`
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 75vw;
  max-width: 320px;
  @media ${mediaQueries.desktop} {
    max-width: 27rem;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
