import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import {GlobalStyled} from './style.js';
import { IconFontStyled } from './statics/iconfont/iconfont';
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
	      <Header/>
	      <BrowserRouter>
	      	 <Route path='/' exact  render={()=><div>home</div>}></Route>
	      	 <Route path='/detail' exact render={()=><div>detail</div>}></Route>
	      </BrowserRouter>
	      <GlobalStyled/>
	      <IconFontStyled/>
	  </Provider>
    </div>
  );
}

export default App;
