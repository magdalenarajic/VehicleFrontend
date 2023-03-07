import { observable, action, makeObservable } from 'mobx';
import makeService from '../services/makeService';

class MakeStore {
  constructor() {
    makeObservable(this, {
      vehicleData: observable,
      getData: action,
    });
  }

  vehicleData = [];

  getData = () => {
    makeService.getVehicleMakes()
      .then((result) => {
        this.vehicleData = result.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

const makeStore = new MakeStore();

export default makeStore;