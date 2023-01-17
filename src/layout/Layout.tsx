import styled from "styled-components";
import { BaseComponentInterface } from "../interfaces/component-base";
import { mediaQueries } from "../media-queries";
import { sizes } from "../sizes";

const LayoutStyles = styled.div`
  width: 100%;

  @media ${mediaQueries.desktop} {
    max-width: ${sizes.desktop};
    display: flex;
  }
`;

const Layout = ({ children }: BaseComponentInterface) => {
  return <LayoutStyles>{children}</LayoutStyles>;
};

export default Layout;
