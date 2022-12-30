import styled from 'styled-components'
import Button from 'react-bootstrap/Button';

const SubmitButton = ({text, onClickFn}) => {
    return (
        <Button variant="outline-success" onClick={onClickFn}>{text}</Button>
    )
}

export default SubmitButton



