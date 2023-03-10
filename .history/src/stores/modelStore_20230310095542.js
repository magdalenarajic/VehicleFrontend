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
  
    updateData = (name, abrv, makeId, id) => {
      const singleData = { Name: name, Abrv: abrv , MakeId: makeId};
      modelService.putVehicleModel(id, singleData).then((response) => {
        this.getData();
      });
    };
  }
  
  const modelStore = new ModelStore();

const singled = { Name: "bmw", Abrv: "b", MakeId: 8};
  modelStore.updateData("4", singled).then((result) => console.log(result));

  export default modelStore;