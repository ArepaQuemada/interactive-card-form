import styled from "styled-components";
import { BaseComponentInterface } from "../interfaces/component-base";
import { mediaQueries } from "../media-queries";
import { sizes } from "../sizes";

const LayoutStyles = styled.div`
  padding: 1rem;
  width: 100%;

  @media ${mediaQueries.desktop} {
    max-width: ${sizes.desktop};
    padding: 4rem;
    display: flex;
  }
`;

const Layout = ({ children }: BaseComponentInterface) => {
  return <LayoutStyles>{children}</LayoutStyles>;
};

export default Layout;
