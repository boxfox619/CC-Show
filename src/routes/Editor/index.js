import injectReducer from '../../core/store/reducers';

export default (store) => ({
    path: 'editor',
    getComponent(nextState, cb) {
        import(['./containers/Editor', './modules/editor']).then((Editor, reducer) => {
            injectReducer(store, {key: 'editor', reducer});
            cb(null, Editor);
        }).catch((err) => {
            console.error('Editor chunk load err', err);
        })
    }
})