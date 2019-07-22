import React from 'react';
import Header from './common/header';
import {GlobalStyled} from './style.js';
import { IconFontStyled } from './statics/iconfont/iconfont';

function App() {
  return (
    <div>
      <Header/>
      <GlobalStyled/>
      <IconFontStyled/>
    </div>
  );
}

export default App;
