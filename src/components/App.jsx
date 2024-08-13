import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Tasks from '../pages/Tasks/Tasks';
import NotFound from '../pages/NotFound/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='tasks' element={<Tasks />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;
