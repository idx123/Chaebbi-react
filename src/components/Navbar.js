import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from "../elements/Button";
// import { BsCircle, BsCircleFill } from 'react-icons/bs';
// import { HiMenu } from "react-icons/hi";

const Navbar =({children})=>{
    const navItem = [
        { id: 1, path: "/record-by-image", name: "식단기록-이미지" },
        { id: 2, path: "/record-by-keyword", name: "식단기록-검색" },
        { id: 3, path: "/analyze-diet", name: "식사패턴분석" },
        { id: 4, path: "/recommend", name: "메뉴추천" },
        { id: 5, path: "/search", name: "음식점검색" },
        { id: 6, path: "/mypage", name: "마이페이지" },
        { id: 7, path: "/community", name: "채숲" }
    ]
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    // useEffect(() => {
    //     console.log(location);
    // }, [location]);

    return (
        <Container>
            <Sidebar>
                <TopArea>
                    <StyledLink to="/">Chaebbi</StyledLink>
                        {/* <HiMenu size="2rem" onClick={toggle}/> */}
                </TopArea>
                <div>
                    {navItem.map( i =>{
                        return(
                            <StyledNavLink key={i.id} to={i.path}>
                                {i.name}
                            </StyledNavLink>
                        )
                    })}
                </div>
                <div>
                    {/* 로그인 여부에 따라 로그인, 로그아웃 버튼이 보이도록 구현할 것 */}
                    <Button text="로그인" width="100%" href="/sign-in"/>
                </div>
            </Sidebar>
            {location.pathname === '/' ?
                <LandingMain>{children}</LandingMain>
            :
                <Main>{children}</Main> 
            }
        </Container>
    )
}

const Container = styled.div`
    color: #535353;
`;

const Sidebar = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #DCE5E7;
    background-color: #FFF;
    width: 35rem;
    height: 100vh;
    font-size: 1.4rem;
    padding: 5.5rem;
    padding-bottom: 3rem;

    div:last-child{
        margin-top: auto;
    }
`;

const TopArea = styled.div`
    margin-bottom: 2.5rem;
`;

const StyledLink = styled(Link)`
    font-size: 3.2rem;
    font-weight: 700;
    text-decoration: none;
    color: #535353;
`;

const StyledNavLink = styled(NavLink)`
    display: flex;
    padding: 1rem 0;
    text-decoration: none;
    color: #535353;
    cursor: pointer;
    transition: 0.2s all;

    &:hover{
        color: #19BC14;
    }

    &.active{
        color: #19BC14;
        font-weight: 600;
    }
`;

const Main = styled.main`
    padding: 10rem 3rem;
    height: auto;
    min-height: 100vh;
    margin-left: 35rem;

    display: flex;
    justify-content: center;
`;

const LandingMain = styled(Main)`
    padding: 0;
    align-items: center;
`;

export default Navbar;