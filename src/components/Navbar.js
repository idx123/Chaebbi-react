import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import Button from '../elements/Button'
import { navItem } from '../utils/NavItem'

const Navbar = ({ isOpen, setIsOpen }) => {
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container className={isOpen ? 'open' : 'close'}>
      <Logo className="logo">
        {isOpen ? (
          <StyledLink to="/">H</StyledLink>
        ) : (
          <StyledLink to="/">Home</StyledLink>
        )}
      </Logo>
      <>
        {isOpen ? (
          <NavItemsWrapper>
            {navItem.map((i) => {
              return (
                <StyledNavLink key={i.id} to={i.path}>
                  {i.icon}
                </StyledNavLink>
              )
            })}
          </NavItemsWrapper>
        ) : (
          <NavItemsWrapper>
            {navItem.map((i) => {
              return (
                <StyledNavLink key={i.id} to={i.path}>
                  {i.name}
                </StyledNavLink>
              )
            })}
          </NavItemsWrapper>
        )}
      </>
      {/* 로그인 여부에 따라 로그인, 로그아웃 버튼이 보이도록 구현할 것 */}
      <div>
        {/* {isOpen ? (
          <StyledLink to="/mypage">userpage</StyledLink>
        ) : (
        <Button text="로그인" href="/sign-in" />
        )} */}
        <Button text="로그인" href="/sign-in" />
        <Toggle onClick={toggle}>menu</Toggle>
      </div>
    </Container>
  )
}

const Container = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--color-border);
  background-color: var(--color-white);
  width: 30rem;
  height: 100vh;

  padding: 4.5rem;
  padding-bottom: 3rem;
  transition: 0.1s all;

  div:last-child {
    margin-top: auto;
  }

  &.open {
    width: 8rem;
    padding: 4.5rem 2rem 3rem 2rem;
  }
`

const Logo = styled.div`
  margin-bottom: 3rem;

  svg {
    font-size: 4rem;
  }
`

const NavItemsWrapper = styled.div`
  svg {
    font-size: 3rem;
    color: var(--color-text);
    position: relative;
    left: 0.5rem;
  }
`

const StyledLink = styled(Link)`
  font-size: 3.6rem;
  font-weight: 700;
  text-decoration: none;

  svg {
    color: var(--color-primary);
  }
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  padding: 1rem 0;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    color: var(--color-primary);

    svg {
      color: var(--color-primary);
    }
  }

  &.active {
    color: var(--color-primary);
    font-weight: 600;

    svg {
      color: var(--color-primary);
    }
  }
`

const Toggle = styled.button`
  color: var(--color-primary);
  border-radius: 100%;
  padding: 0.4rem;

  svg {
    position: relative;
    top: 0.1rem;
  }
`

export default Navbar
