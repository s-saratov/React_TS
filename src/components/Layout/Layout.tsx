import { Link } from "react-router-dom";
import {
  LayoutComponent,
  Header,
  NavContainer,
  LogoContainer,
  Main,
  Footer,
  StyledNavLink,
} from "./styles";
import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  return (
    <LayoutComponent>
      <Header>
        <Link to="/">
          <LogoContainer></LogoContainer>
        </Link>

        <NavContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            About
          </StyledNavLink>
          <StyledNavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            to="/clients"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Clients
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Link to="/">
          <LogoContainer></LogoContainer>
        </Link>
      </Footer>
    </LayoutComponent>
  );
}
export default Layout;