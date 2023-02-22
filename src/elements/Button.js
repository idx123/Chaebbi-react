import styled from "styled-components";
import { Link } from "react-router-dom";

const Button =(props)=>{
    const {width, fontsize, href, text, margin, position, top, left, _onClick} = props;
    return (
        <>
        { href ? 
            (<StyledLink to={href} margin={margin} position={position} top={top} left={left}>
                <StyledButton width={width} fontsize={fontsize} onClick={_onClick}>
                    {props.text}
                </StyledButton>
            </StyledLink>)
            :  
            (<StyledButton 
                width={width} fontsize={fontsize} margin={margin} onClick={_onClick}
                position={position} top={top} left={left}
            >
                {text}
            </StyledButton>)
        }    
        </>
    )
}

const StyledButton = styled.button`
    width: ${(props)=> props.width};
    font-size: ${(props)=> props.fontsize ? props.fontsize : '1.4rem'};
    margin: ${(props)=> props.margin};
    position: ${(props)=> props.position};
    top: ${(props)=> props.top};
    left: ${(props)=> props.left};
    border: 1px solid #19bc14;
    background-color: #19bc14;
    border-radius: 0.2rem;
    color: #fff;
    padding: 0.2rem 2.5rem;
    height: 4rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
        background-color: #0f8e08;
        border: 1px solid #0f8e08;
    }
`;

const StyledLink = styled(Link)`
    margin: ${(props)=>props.margin};
    position: ${(props)=> props.position};
    top: ${(props)=> props.top};
    left: ${(props)=> props.left};
    text-decoration: none;
    color: #fff;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default Button;