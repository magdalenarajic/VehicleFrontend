import makeService from '../services/makeService';
import { observable, action, makeObservable } from 'mobx';

export class makeStore{
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

// eslint-disable-next-line import/no-anonymous-default-export
export default new makeStore();
