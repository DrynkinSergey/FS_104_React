import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/about' element={<h1>About page</h1>} />
      </Routes>
    </div>
  );
};
