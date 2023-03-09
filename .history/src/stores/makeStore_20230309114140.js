import { observable, action, makeObservable } from "mobx";
import makeService from "../services/makeService";

class MakeStore {
  constructor() {
    makeObservable(this, {
      status: observable,
      vehicleData: observable,
      getData: action,
      createData: action,
      deleteData: action,
      updateData: action,
      getSingleData: action
    });
  }

  status = "initial";
  vehicleData = [];

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
    makeService.getVehicleMake(id)
    .then((result) => {
      this.vehicleData = result.data;
    });
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

  updateData = (abrv, name, id) => {
    const vehicleData = { Abrv: abrv, Name: name };
    makeService.putVehicleMake(id, vehicleData).then((response) => {
      if (response.status === 200) {
        this.status = "success";
        this.getData();
      }
    });
  };
}

const makeStore = new MakeStore();
export default makeStore;