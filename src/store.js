import { reducers } from './reducers'
import { createStore } from 'redux'

const reduxStore = createStore(reducers);

const subscribe = function(select,callback){
  let prevState = select(reduxStore.getState());
  return reduxStore.subscribe(()=>{
    if(prevState != select(reduxStore.getState())){
      callback(select(reduxStore.getState()));
    }
  });
};

const dispatch = function(action){
  store.dispatch(action);
}

exports.dispatch = dispatch;
exports.subscribe = subscribe;
export default store;
