import "./App.css";
import styled from "styled-components"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <AppStyled>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppStyled>
  );
}

export default App;


const AppStyled  = styled.div`
  h1{
  }
`