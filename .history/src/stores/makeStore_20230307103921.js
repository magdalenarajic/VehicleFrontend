import { observable, action, makeAutoObservable } from 'mobx';
import { getVehicleMakes } from '../services/makeService';


const data = [];
getVehicleMakes().then((result) => 
       this.data = result);
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