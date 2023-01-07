import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/Header';

function Page({ children }) {
  return (
    <GlobalStyle>
      <Content>
        <Header/>
        { children }
      </Content>
    </GlobalStyle>
  );
}

const GlobalStyle = styled.html`
  font-family: 'Josefin Sans', sans-serif;
`
const Content = styled.div`
  margin: 3em 15em 3em 15em;
`

export default Page;
