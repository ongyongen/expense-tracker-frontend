import styled from 'styled-components'

const Text = ({text}) => {
    return (
        <ParagraphText>{text}</ParagraphText>
    )
}

const ParagraphText = styled.h1`
    font-size: 1em;
`

export default Text
