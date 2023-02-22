import styled from "styled-components";

const Form =(props)=>{
    const {width, minwidth, children} = props;

    return (
        <StyledForm width={width} minwidth={minwidth}>
            {children}
        </StyledForm>
    )
}

const StyledForm = styled.form`
    width: ${(props)=> props.width};
    min-width: ${(props)=> props.minwidth};
    height: 100%;
    padding: 2rem;
    background-color: #fff;
    border-radius: 0.5rem;
`;

export default Form;