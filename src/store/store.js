import reducer from './Reducers';
import { createStore } from 'redux';

const store = createStore(reducer);

export const subscribe = (select,callback)=>{
    let prevState = select(store.getState());
    return store.subscribe(()=>{
        if(prevState !== select(store.getState())){
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