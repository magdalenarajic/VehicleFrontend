import {getVehicleMakes} from '../services/makeService';
import { observable, action, makeObservable } from 'mobx';
export {default as makeStore} from '../stores/makeStore';

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
