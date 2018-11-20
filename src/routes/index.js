import CoreLayout from '../layouts/PageLayout/PageLayout'
import HomeRoute from './Home'
import EditorRoute from './Editor'

export const createRoutes = (store) => ({
    path        : '/',
    component   : CoreLayout,
    indexRoute  : HomeRoute(store),
    childRoutes : [
        EditorRoute(store)
    ]
})

export default createRoutes