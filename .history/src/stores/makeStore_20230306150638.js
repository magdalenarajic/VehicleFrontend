import makeService from '../services/makeService';
import { observable, action, makeObservable } from 'mobx';

class VehicleMakeStore{
    constructor(){
        makeObservable(this, {
            data: observable,
            status: observable,
            getData: action
        });
        
    }
    data = [];

    getData(){
         makeService.getVehicleMakes().then((result) => {
            this.data = result.data;
         })
    }
}

const makeStore = new VehicleMakeStore();

export default makeStore;
