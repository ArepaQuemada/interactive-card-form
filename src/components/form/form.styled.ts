import styled from "styled-components";

export const FormWrapper = styled.div`
  margin-top: 4rem;
  max-width: 400px;
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
