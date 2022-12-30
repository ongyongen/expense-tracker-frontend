import styled from 'styled-components'
import Alert from 'react-bootstrap/Alert';
import { useErrorMessage } from './errorMessageHooks';

const ErrorMessage = ({text}) => {
    const [showMessage, {hideErrorMessage}] = useErrorMessage()
    return (
        <ErrorMessageContainer>
        {showMessage && 
        <Alert variant={"danger"} onClose={hideErrorMessage} dismissible>
        {text}
        </Alert>}
        </ErrorMessageContainer>
    )
}

const ErrorMessageContainer = styled.div`
    margin:3em 0em 1.5em 0em;
    width:30vw;
`

export default ErrorMessage
