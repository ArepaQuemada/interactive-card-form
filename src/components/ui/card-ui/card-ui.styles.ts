import styled from "styled-components";
import { mediaQueries } from "../../../media-queries";
import cardDesktopt from "../../../assets/images/bg-main-desktop.png";
import cardMobile from "../../../assets/images/bg-main-mobile.png";

export const CardUIStyles = styled.div`
  width: 100%;
  background-image: url(${cardMobile});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  min-height: 235px;

  @media ${mediaQueries.desktop} {
    background-image: url(${cardDesktopt});
    min-height: 100vh;
    max-width: 33vw;
  }
`;
