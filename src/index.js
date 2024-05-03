import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // {/* // <App/>이 감싸져있다면 개발모드에서 (계발 단계에서 오류잡으려고) 두번씩 렌더링이 됨 */}
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <BrowserRouter basename={process.env.PUBLIC_URL}>
);
