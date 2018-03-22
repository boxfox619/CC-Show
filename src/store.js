import reducer from 'services/reducer';
import { createStore, applyMiddleware , compose} from 'redux';
import ReduxThunk from 'redux-thunk';;

const store = createStore(reducer, compose(applyMiddleware(ReduxThunk)));

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

export default store;
