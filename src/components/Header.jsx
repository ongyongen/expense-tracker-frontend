import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderText>Log Expenses</HeaderText>
            <HeaderText>Challenges</HeaderText>
            <HeaderText>Profile</HeaderText>
        </HeaderContainer>

    )
}

const HeaderContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
`
const HeaderText = styled.p`
    font-size: 1em;
    padding: 1em 2.5em 1em 0em;
`

export default Header
