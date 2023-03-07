import {getVehicleMakes} from '../services/makeService';
import { observable, action, makeAutoObservable } from 'mobx';


const data = [];
getVehicleMakes((result) => {
    this.data = result.data.data;
});
console.log(data);


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