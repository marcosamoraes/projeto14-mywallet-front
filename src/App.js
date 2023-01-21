import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './globalStyles.js';
import Login from './screens/Login/Login.js';
import Register from './screens/Register/Register.js';
import Home from './screens/Home/Home.js';
import ValuesEntry from './screens/ValuesEntry/ValuesEntry.js';
import ValuesOutput from './screens/ValuesOutput/ValuesOutput.js';

export default function App () {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/cadastro" element={<Register />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/nova-entrada" element={<ValuesEntry />} />
        <Route path="/nova-saida" element={<ValuesOutput />} />
      </Routes>
    </BrowserRouter>
  )
}