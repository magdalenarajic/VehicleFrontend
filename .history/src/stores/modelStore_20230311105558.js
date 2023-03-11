import { observable, action, makeObservable } from "mobx";
import modelService from "../services/modelService";

class ModelStore {
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
    });
  }

  status = "initial";
  vehicleData = [];
  singleData = [];

  getData = () => {
    modelService
      .getVehicleModels()
      .then((result) => {
        this.vehicleData = result.data;
      })
      .catch((error) => {
        console.log(error);
        this.status = "error";
      });
  };

  getSingleData = (id) => {
    return modelService.getVehicleModel(id);
  };

  createData = (abrv, name, makeId) => {
    const vehicleData = { Abrv: abrv, Name: name, MakeId: makeId };

    modelService.postVehicleModel(vehicleData).then((response) => {
      if (response.body === true) {
        this.status = "success";
        this.getData();
      }
    });
  };

  deleteData = (id) => {
    modelService.deleteVehicleModel(id).then((response) => {
      this.getData();
    });
  };

  updateData = (name, abrv, id) => {
    const singleData = { Name: name, Abrv: abrv };
    modelService.putVehicleModel(id, singleData).then((response) => {
      console.log(response);
      this.getData();
    });
  };

  sortData = () => {
    modelService
      .getOrderedModels()
      .then((result) => {
        this.vehicleData = result.data;
      })
      .catch((error) => {
        console.log(error);
        this.status = "error";
      });
  };

  filterDataByName = (searchInput) => {
    const name = searchInput;
    modelService
      .getFilteredModels(name)
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

const modelStore = new ModelStore();

export default modelStore;
