import { observable, action, makeObservable } from 'mobx';
import { getVehicleMakes } from '../services/makeService';



getVehicleMakes()
      .then((result) => {
        var data = [];
        this.data = result.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
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
        });
    };

};

const makeStore = new vehicleMakeStore();

export default makeStore;
console.log(makeStore);