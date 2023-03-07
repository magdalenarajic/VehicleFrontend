import {getVehicleMakes} from '../services/makeService';
import { observable, action, makeObservable } from 'mobx';

class vehicleMakeStore{
    
    vehicleData = [];

    constructor(){
        makeObservable(
            this, 
            {
            vehicleData: observable,
            getData: action
        });   
    };

    getData() {
        getVehicleMakes()
        .then((result) => {
           this.vehicleData = result.data;
        });
    };

};

const makeStore = new vehicleMakeStore();
export default makeStore;
