import styled from 'styled-components'

const SubmitButton = ({text, onClickFn}) => {
    return (
        <Button onClick={onClickFn}>{text}</Button>
    )
}

const Button = styled.button`
    display: inline-block;
    background: salmon;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid Chocolate;
    border-radius: 3px;
`

export default SubmitButton



