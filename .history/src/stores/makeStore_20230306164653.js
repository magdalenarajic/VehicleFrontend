import {getVehicleMakes} from '../services/makeService';
import { observable, action, makeObservable } from 'mobx';

class MakeStore{
    
    vehicleData = [];

    constructor(){
        makeObservable(this, {
            data: observable,
            getData: action
        });   
    };

    getData(){
        getVehicleMakes()
        .then((result) => {
           this.vehicleData = result.data;
        });
    };

};

const makeStore = new MakeStore();
export default makeStore;
