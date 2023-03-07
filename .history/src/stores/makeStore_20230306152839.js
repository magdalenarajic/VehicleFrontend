import getVehicleMakes from '../services/makeService';
import { observable, action, makeObservable } from 'mobx';

class VehicleMakeStore{
    data = [];
    constructor(){
        makeObservable(this, {
            data: observable,
            getData: action
        });   
    }
    getData = () => {
         getVehicleMakes().then((result) => {
            this.data = result.data;
         });
    };
};

const makeStore = new VehicleMakeStore();

export default makeStore;
