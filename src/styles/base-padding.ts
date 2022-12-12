import styled from "styled-components";
import { mediaQueries } from "../media-queries";

export const BasePadding = styled.div`
  padding: 1rem;

  @media ${mediaQueries.desktop} {
    padding: 3rem;
  }
`;
