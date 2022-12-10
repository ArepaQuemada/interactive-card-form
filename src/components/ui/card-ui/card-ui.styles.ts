import styled from "styled-components";
import { mediaQueries } from "../../../media-queries";
import cardDesktopt from "../../../assets/images/bg-main-desktop.png";
import cardMobile from "../../../assets/images/bg-main-mobile.png";

export const CardUIStyles = styled.div`
  background-image: url(${cardMobile});
  object-fit: contain;

  @media ${mediaQueries.desktop} {
    background-image: url(${cardDesktopt});
  }
`;
