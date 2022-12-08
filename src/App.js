import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {AiFillRead} from 'react-icons/ai';
import {CartProvider} from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Nav>
            <AiFillRead></AiFillRead>
            <Logo to={'/'}> 
              misteov
            </Logo>
          </Nav>
          <Search></Search>
          <Category></Category>
          <Pages></Pages>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:  none;
  font-size: 1.5rem;
  font-weight:  400;
  font-family: cursive;
`;

const Nav = styled.div`
  padding: 2.5rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size: 2rem;
  }
`;

export default App;
