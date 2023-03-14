import { observable, action, makeObservable } from "mobx";
import makeService from "../services/MakeService";

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
      getSingleData: action,
      pageSortAndFilterData: action
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
  };

  createData = (abrv, name) => {
    const vehicleData = { Abrv: abrv, Name: name };
    makeService.postVehicleMake(vehicleData).then((response) => {
      if (response.body === true) {
        this.status = "success";
      }
    });
  };

  deleteData = (id) => {
    makeService.deleteVehicleMake(id).then((response) => {
      if (response.body === true) {
        this.status = "success";
      }
    });
  };

  updateData = (name, abrv, id) => {
    const singleData = { Name: name, Abrv: abrv };
    makeService.putVehicleMake(id, singleData).then((response) => {
      if (response.body === true) {
        this.status = "success";
      }
    });
  };


  pageSortAndFilterData = (pageNumber, pageSize, name, order) => {
    makeService
      .getPagedMakes(pageNumber, pageSize, name, order)
      .then((result) => {
        this.vehicleData = result.data;
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        this.status = "error";
      });
  };
}

const makeStore = new MakeStore();

// makeStore.getSingleData(60).then((result) => console.log(result.data));
export default makeStore;
