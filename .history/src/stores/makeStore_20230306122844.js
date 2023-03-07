import makeService from '../services/makeService';
import { observable, action, makeObservable } from 'mobx';

class makesStore{
    data = [];
    status = "initial";
    constructor(){
        makeObservable(this, {
            data: observable,
            status: observable,
            getData: action
        });
    }

    getData(){
         makeService.getVehicleMakes().then((result) => {
            this.data = result.data;
         })
    }
}

export default makesStore;