import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Category } from "./components/category/index";
import { Header } from "./components/header/index";
import { GlobalStyle } from './Global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;