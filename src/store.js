import reducers from './reducers'
import { createStore } from 'redux'

const store = createStore(reducers);

export const subscribe = (select,callback)=>{
  let prevState = select(store.getState());
  return store.subscribe(()=>{
    if(prevState != select(store.getState())){
      callback(select(store.getState()));
    }
  });
};

export const dispatch = (action)=>{
  store.dispatch(action);
}

export const getState = ()=>{
  return store.getState();
}
