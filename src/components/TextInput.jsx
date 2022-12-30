import styled from 'styled-components'
import Form from 'react-bootstrap/Form';

const TextInput = ({label, onChangeFn}) => {
    return (
        <TextInputContainer>
            <Form.Group className="mb-3">
                <Form.Label>{label}</Form.Label>
                <Form.Control type="text" placeholder={`Enter ${label}`} onChange={onChangeFn} />
            </Form.Group>
        </TextInputContainer>
    )
}

const TextInputContainer = styled.div`
    margin:1.5em 0em 1.5em 0em;
    display:flex;
    flex-direction:column;
    width:30vw;
`

export default TextInput
