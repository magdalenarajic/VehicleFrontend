import { observable, action, makeObservable } from 'mobx';
import MakeService from '../services/makeService';

class MakeStore {
  constructor() {
    makeObservable(this, {
      vehicleData: observable,
      getData: action,
    });
  }

  vehicleData = [];

  getData = () => {
    MakeService.getVehicleMakes()
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