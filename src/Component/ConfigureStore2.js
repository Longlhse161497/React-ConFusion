import {createStore} from 'redux';
import { Reducer2 } from './Reducer2';

export const ConfigureStore2=()=>{
    const store=createStore(Reducer2);
    return store;
}