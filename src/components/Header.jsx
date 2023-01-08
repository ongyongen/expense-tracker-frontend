import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLink>Log Expenses</HeaderLink>
            <HeaderLink>Challenges</HeaderLink>
            <HeaderLink>Profile</HeaderLink>
            <HeaderLink href="/login">Log In</HeaderLink>
        </HeaderContainer>

    )
}

const HeaderContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
`
const HeaderLink = styled.a`
    text-decoration: none;
    font-size: 1em;
    padding: 1em 2.5em 1em 0em;
`

export default Header
