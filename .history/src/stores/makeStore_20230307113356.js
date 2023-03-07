import { observable, action, makeObservable } from 'mobx';
import { getVehicleMakes } from '../services/makeService';

class MakeStore {
  constructor() {
    makeObservable(this, {
      data: observable,
      getData: action,
    });
  }

  behicleData = [];

  getData = () => {
    getVehicleMakes()
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