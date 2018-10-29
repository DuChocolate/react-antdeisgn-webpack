import { createStore} from 'redux';
import rootReducer from '../reducers/index';

const configureStore = () => {
    const store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : undefined);
    return store;
};
export default configureStore;