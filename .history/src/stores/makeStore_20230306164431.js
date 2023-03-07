import {getVehicleMakes} from '../services/makeService';
import { observable, action, makeObservable } from 'mobx';

class makeStore{
    
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


export default makeStore;
