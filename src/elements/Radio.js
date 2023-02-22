import styled from "styled-components";

const Radio =(props)=>{
    const {id, label, name, value, margin, fontsize, _onClick, _onChange} = props;

    return(
        <Container margin={margin}>
            <Input type="radio" id={id} name={name} value={value} onClick={_onClick} onChange={_onChange}/>
            <StyledLabel htmlFor={id} fontsize={fontsize}>{label}</StyledLabel>
        </Container>
    )
}

const Container = styled.div`
    margin: ${(props)=>props.margin};
    font-size: 1.4rem;
`;

const StyledLabel = styled.label`
    margin: ${(props)=>props.margin}; 
    margin-left: 0.8rem;
`;

const Input = styled.input.attrs({type:'radio'})`
    accent-color: green;

    &:checked + ${StyledLabel}{
        color: #19BC14;
        font-weight: 600;
        outline: none;
    }
`;

export default Radio;