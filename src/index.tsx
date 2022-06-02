import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { ConfigProvider } from 'antd';
// import vi_VN from 'antd/lib/locale/vi_VN';
import 'antd/dist/antd.min.css'
import './styles/index.css';
import './styles/antUpdate.css'
import store from './store';

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      {/* <ConfigProvider locale={vi_VN}> */}
        <Provider store={store}>
          <App />
        </Provider>
      {/* </ConfigProvider> */}
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
