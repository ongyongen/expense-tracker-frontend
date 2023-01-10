import styled from 'styled-components'
import Form from 'react-bootstrap/Form';

const PasswordInput = ({label, onChangeFn}) => {
    return (
        <PasswordInputContainer>
            <Form.Group className="mb-3">
                <Form.Label>{label}</Form.Label>
                <Form.Control type="password" placeholder={`Enter ${label}`} onChange={onChangeFn} />
            </Form.Group>
        </PasswordInputContainer>
    )
}

const PasswordInputContainer = styled.div`
    margin:1.5em 0em 1.5em 0em;
    display:flex;
    flex-direction:column;
    width:30vw;
`

export default PasswordInput
