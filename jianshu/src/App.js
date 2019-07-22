import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import {GlobalStyled} from './style.js';
import { IconFontStyled } from './statics/iconfont/iconfont';
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
	      <Header/>
	      <GlobalStyled/>
	      <IconFontStyled/>
	  </Provider>
    </div>
  );
}

export default App;
