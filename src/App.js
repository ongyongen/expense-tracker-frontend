import CategoryForm from './features/CategoryForm/CategoryForm';
import styled, { createGlobalStyle } from 'styled-components'
import Header from './components/Header';
import ExpenseForm from './features/ExpenseForm/ExpenseForm';
import ExpenseTable from './features/ExpenseTable/ExpenseTable';

function App() {
  return (
    <GlobalStyle>
      <Page>
        <Header/>
        {/* <CategoryForm/> */}
        {/* <ExpenseForm/> */}
        <ExpenseTable/>
      </Page>
    </GlobalStyle>
  );
}

const GlobalStyle = styled.html`
  font-family: 'Josefin Sans', sans-serif;
`
const Page = styled.div`
  margin: 3em 15em 3em 15em;
`

export default App;
