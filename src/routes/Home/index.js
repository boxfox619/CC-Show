import injectReducer from '../../core/store/reducers';

export default (store) => ({
    path: 'index',
    getComponent(nextState, cb) {
        import(['./containers/Home', './modules/home']).then((Home, reducer) => {
            injectReducer(store, {key: 'home', reducer});
            cb(null, Home);
        }).catch(err => {
            console.log('Home router loading err', err);
        })
    }
})