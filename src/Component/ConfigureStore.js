import {createStore} from 'redux';
import { Reducer, initState } from './Reducer';

export const ConfigureStore=() => {
    const store = createStore(Reducer, initState);
    return store;
}