import styled from "styled-components";
import { mediaQueries } from "../media-queries";

export const BasePadding = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;

  @media ${mediaQueries.desktop} {
    padding: 3rem;
  }
`;
