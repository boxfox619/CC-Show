import injectReducer from '../../core/store/reducers';

export default (store) => ({
    path: 'show',
    getComponent(nextState, cb) {
        import(['./containers/ShowListPage', './modules/show']).then((Home, reducer) => {
            injectReducer(store, {key: 'show', reducer});
            cb(null, Home);
        }).catch(err => {
            console.log('Show router loading err', err);
        })
    }
})