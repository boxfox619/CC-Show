import {injectReducer} from '../../core/store/reducers';
import {registerSagas} from '../../core/store/sagas';

export default (store) => ({
    path: 'editor',
    getComponent(nextState, cb) {
        import(['./containers/Editor', './modules/editor']).then((Editor, module) => {
            injectReducer(store, {key: 'editor', reducer: module.reducer});
            registerSagas(module.saga);
            cb(null, Editor);
        }).catch((err) => {
            console.error('Editor chunk load err', err);
        })
    }
})