import { observable, action, makeObservable } from 'mobx';
import { getVehicleMakes } from '../services/makeService';



console.log(getVehicleMakes());
export class vehicleMakeStore{
    
    vehicleData = [];
    constructor(){
        makeObservable(this, {
            vehicleData: observable,
            getData: action
        });   
    }

    getData = () => {
        getVehicleMakes()
      .then((result) => {
        this.vehicleData = result.data;
      })
      .catch((error) => {
        console.log(error);
      });
    };

};

const makeStore = new vehicleMakeStore();

export default makeStore;
console.log(makeStore);