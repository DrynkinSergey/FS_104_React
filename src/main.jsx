import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import 'modern-normalize';
import './index.css';
import { createContext } from 'react';

// 1. Create context
export const userContext = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* 2. Wrapp App by context */}
    <userContext.Provider value={{ model: 'RS6' }}>
      <App />
    </userContext.Provider>
  </>
);
