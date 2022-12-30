import styled from 'styled-components'

const Title = ({text}) => {
    return (
        <HeaderOne>{text}</HeaderOne>
    )
}

const HeaderOne = styled.h1`
    font-size: 1.5em;
`

export default Title
