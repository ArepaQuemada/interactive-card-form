import styled from "styled-components";
import { mediaQueries } from "../../../media-queries";

export const FormUIStyles = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.white.default};
  @media ${mediaQueries.desktop} {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-5vh);
  }
`;
