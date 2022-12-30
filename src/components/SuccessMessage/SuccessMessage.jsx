import styled from 'styled-components'
import Alert from 'react-bootstrap/Alert';
import { useSuccessMessage } from './successMessageHooks';

const SuccessMessage = ({text}) => {
    const [showMessage, {hideSuccessMessage}] = useSuccessMessage()
    return (
        <SuccessMessageContainer>
        {showMessage && 
        <Alert variant={"success"} onClose={hideSuccessMessage} dismissible>
        {text}
        </Alert>}
        </SuccessMessageContainer>
    )
}

const SuccessMessageContainer = styled.div`
    margin:3em 0em 1.5em 0em;
    width:30vw;
`

export default SuccessMessage
