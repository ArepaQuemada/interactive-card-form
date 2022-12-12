import styled from "styled-components";
import { mediaQueries } from "../../media-queries";

export const BaseCardWrapper = styled.div`
  position: relative;
  color: ${(props) => props.theme.white.default};
`;

export const ImageContainer = styled.div<{ imagePath: string }>`
  width: 75vw;
  max-width: 281px;
  min-height: 160px;
  padding: 1rem;
  background: url(${(props) => props.imagePath});
  background-size: cover;
  border-radius: 10px;

  @media ${mediaQueries.desktop} {
    max-width: 27rem;
    min-height: 15rem;
    padding: 2.5rem;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
