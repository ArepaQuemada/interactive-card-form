import styled from "styled-components";
import { mediaQueries } from "../../media-queries";

export const FormWrapper = styled.div`
  margin-top: 4rem;
  max-width: 400px;
  @media ${mediaQueries.desktop} {
  }
`;

export const DateAndCvC = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
`;

export const CvcWrapper = styled.div`
  grid-column: 5 / 9;
`;

export const ExpDateDate = styled.div`
  grid-column: 1 / 3;
`;

export const MonthYear = styled.div`
  grid-column: 3 / 5;
`;
