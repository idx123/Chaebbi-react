import styled from "styled-components";

const Input =(props)=>{
    const {id, label, type, placeholder, _onChange, margin} = props;
    return (
        <Container margin={margin}>
            <StyledLabel htmlFor={id}>{label}</StyledLabel>
            <StyledInput id={id} type={type} placeholder={placeholder} onChange={_onChange}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-size: 1.4rem;
    margin: ${(props)=> props.margin ? props.margin : "0 0 1rem 0"};
`;

const StyledLabel = styled.label`
    position: relative;
    left: 0.4rem;
`;

const StyledInput = styled.input`
    height: 4rem;
    border: 1px solid #DCE5E7;
    border-radius: 0.2rem;
    padding: 0.5rem 1rem;
    outline: none;

    &:focus, &:active{
        border: 1.5px solid #19BC14;
    }
    
    &::placeholder{
        color: #B7C2C6; //서브컬러사용
    }
`;

export default Input;