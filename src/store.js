import { reducers } from './reducers'
import { createStore } as Redux from 'redux'

const reduxStore = createStore(reducers);

const subscribe: (select,callback) =>{
  let prevState = select(reduxStore.getState());
  return reduxStore.subscribe(()=>{
    if(prevState != select(reduxStore.getState()){
      callback(select(reduxStore.getState()));
    }
  });
};

exports.subscribe subscribe;
exports.default reduxStore;
