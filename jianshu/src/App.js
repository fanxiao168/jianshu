import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import {GlobalStyled} from './style.js';
import { IconFontStyled } from './statics/iconfont/iconfont';
import store from './store';

function App() {
  return (
    
    <Provider store={store}>
	    <div>
		    <Header/>
		    <BrowserRouter>
		      	 <Route path='/' exact  component={Home}></Route>
		      	 <Route path='/detail' exact component={Detail}></Route>
		    </BrowserRouter>
		    <GlobalStyled/>
		    <IconFontStyled/>
		</div>
	</Provider>
  );
}

export default App;
