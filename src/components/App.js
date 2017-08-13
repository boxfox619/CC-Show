import React from 'react'
import SlideEditor from './editor/SlideEditor'
import store from '../store';
import { Provider  } from 'react-redux';

class App extends React.Component{
  render(){
    return (
      <Provider store = {store}>
      <SlideEditor/>
      </Provider>
    );
  }

}

export default App;
