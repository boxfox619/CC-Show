import React from 'react'
import Show from './show/Show';
import store from '../store';
import { Provider } from 'react-redux';

class ShowList extends React.Component{
  render(){
    return (
      <Provider store = {store}>
        <Show/>
      </Provider>
    );
  }

}

export default ShowList;
