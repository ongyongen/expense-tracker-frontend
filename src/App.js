import Test from './Test';
import styled from 'styled-components'

function App() {
  return (
    <Page>
        <div>
          <header>
            <p>hello world</p>
            <Test/>
          </header>
          <Footer>Footer</Footer>
    </div>

    </Page>
  );
}

const Page = styled.div`
  padding: 1em;
  background: papayawhip;
`

const Navigation = styled.div`
  background: BurlyWood;
  padding: 1em;
`

const Footer = styled.div`
  background: Chocolate;
  padding: 1em;
  margin-top: 1em;
`

export default App;
