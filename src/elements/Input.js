import styled from 'styled-components'

const Input = (props) => {
  const {
    id,
    label,
    type,
    placeholder,
    _onChange,
    errorMessage,
    successMessage,
  } = props
  return (
    <Container>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={_onChange}
        autoComplete="off"
      />
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1rem;

  p {
    font-size: 1.2rem;
  }

  p.error {
    color: var(--color-danger);
  }
  p.success {
    color: var(--color-point);
  }
`

const StyledLabel = styled.label`
  position: relative;
  left: 0.4rem;
`

const StyledInput = styled.input`
  height: 4rem;
  border: 1px solid #dce5e7;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  outline: none;

  &:focus,
  &:active {
    border: 1.5px solid #19bc14;
  }

  &::placeholder {
    color: var(--color-sub-text);
  }
`

export default Input
