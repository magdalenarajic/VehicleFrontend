import {getVehicleMakes} from '../services/makeService';
import { observable, action, makeObservable } from 'mobx';

class makeStore{
    data = [];
    constructor(){
        makeObservable(this, {
            data: observable,
            getData: action
        });   
    }
    getData = () => {
         getVehicleMakes()
         .then((result) => {
            this.data = result.data;
         });
    };
};
console.log(this.data);
export default makeStore;
