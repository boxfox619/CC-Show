import React from 'react'
import ShowListContext from './pptlist/ShowList';
import store from '../store';
import { Provider } from 'react-redux';

class ShowList extends React.Component{
  render(){
    return (
      <Provider store = {store}>
        <ShowListContext/>
      </Provider>
    );
  }

}

export default ShowList;
