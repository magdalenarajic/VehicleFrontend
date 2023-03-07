import {getVehicleMakes} from '../services/makeService';
import { observable, action, makeAutoObservable, runInAction } from 'mobx';


export class vehicleMakeStore{
    
    vehicleData = [];
    constructor(){
        makeAutoObservable(this, {
            vehicleData: observable,
            getData: action
        });   
    }

    getData = () => {
        const response = getVehicleMakes();
        runInAction(() => {
               this.vehicleData = response.data;
        }); 
    };

};

const makeStore = new vehicleMakeStore();

makeStore.getData();
console.log(makeStore.vehicleData);

export default makeStore;