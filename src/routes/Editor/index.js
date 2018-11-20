import injectReducer from '../../core/store/reducers';

export default (store) => ({
    path : 'editor',
    getComponent (nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
            and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            const Editor = require('./containers/Editor').default;
            const reducer = require('./modules/editor').default;
            injectReducer(store, { key: 'editor', reducer });
            cb(null, Editor);
        }, 'editor')
    }
})