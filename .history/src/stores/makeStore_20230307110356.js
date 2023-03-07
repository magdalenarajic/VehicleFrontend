import { observable, action, makeObservable } from 'mobx';
import { getVehicleMakes } from '../services/makeService';

class MakeStore {
  constructor() {
    makeObservable(this, {
      data: observable,
      getData: action,
    });
  }

  data = [];

  getData = () => {
    getVehicleMakes()
      .then((result) => {
        this.data = result;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

const makeStore = new MakeStore();

export default makeStore;