import injectReducer from '../../core/store/reducers';

export default (store) => ({
    path : 'index',
    getComponent (nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
            and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            const Home = require('./containers/Home').default;
            const reducer = require('./modules/home').default;
            injectReducer(store, { key: 'home', reducer });
            cb(null, Home);
        }, 'editor')
    }
})