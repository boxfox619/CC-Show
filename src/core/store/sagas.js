import { BehaviorSubject  } from 'rxjs';

const rootSaga = new BehaviorSubject([]);

export const registerSagas = (sagas) => {
    let currentSaga = rootSaga.getValue();
    rootSaga.next([...currentSaga, ...sagas]);
};

export default rootSaga;