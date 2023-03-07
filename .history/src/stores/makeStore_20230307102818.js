import {getVehicleMakes} from '../services/makeService';
import { observable, action, makeAutoObservable } from 'mobx';

export class vehicleMakeStore{
    
    vehicleData = [];
    constructor(){
        makeAutoObservable(this, {
            vehicleData: observable,
            getData: action
        });   
    }

    getData = () => {
        getVehicleMakes()
        .then((result) => {
           this.vehicleData = result.data;
        });
    };

};

const makeStore = new vehicleMakeStore();

export default makeStore;
console.log(makeStore);