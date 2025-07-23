import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Store.js';
// import App from './connect-App.jsx';
import App from './hook-App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
