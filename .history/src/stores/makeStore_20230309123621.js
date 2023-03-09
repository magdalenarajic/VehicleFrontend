import { observable, action, makeObservable } from "mobx";
import makeService from "../services/makeService";

class MakeStore {
  constructor() {
    makeObservable(this, {
      status: observable,
      vehicleData: observable,
      singleData: observable,
      getData: action,
      createData: action,
      deleteData: action,
      updateData: action,
      getSingleData: action
    });
  }

  status = "initial";
  vehicleData = [];
  singleData = [];

  getData = () => {
    makeService
      .getVehicleMakes()
      .then((result) => {
        this.vehicleData = result.data;
      })
      .catch((error) => {
        console.log(error);
        this.status = "error";
      });
  };

  getSingleData = (id) => {
   return makeService.getVehicleMake(id);
  }

  createData = (abrv, name) => {
    const vehicleData = { Abrv: abrv, Name: name };

    makeService.postVehicleMake(vehicleData).then((response) => {
      if (response.body === true) {
        this.status = "success";
        this.getData();
      }
    });
  };

  deleteData = (id) => {
    makeService.deleteVehicleMake(id).then((response) => {
      this.getData();
    });
  };

  updateData = (name, abrv, id) => {
    const singleData = { Name: name, Abrv: abrv};
    makeService.putVehicleMake(id, singleData).then((response) => {
        this.getData();
    });
  };
}

const makeStore = new MakeStore();
export default makeStore;
