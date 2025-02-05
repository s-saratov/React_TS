import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <LayoutComponent>
      <Header>
        {/* Второй способ перехода на главную страницу при клике на логотип */}
        <LogoContainer onClick={() => navigate("/")}></LogoContainer>
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
          <StyledNavLink
            to="/lesson14"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson 14
          </StyledNavLink>
          <StyledNavLink
            to="/consultation06"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Consultation 06
          </StyledNavLink>
          <StyledNavLink
            to="/homework14"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Homework 14
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        {/* Первый способ перехода на главную страницу при клике на логотип */}
        <Link to="/">
          <LogoContainer></LogoContainer>
        </Link>
      </Footer>
    </LayoutComponent>
  );
}
export default Layout;
