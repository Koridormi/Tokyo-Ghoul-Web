// import App from './App.jsx'; <-- Export por defecto
import {createRoot} from 'react-dom/client';
import {App} from './App.jsx';

const root = document.querySelector('#root');
createRoot(root).render(<App></App>);