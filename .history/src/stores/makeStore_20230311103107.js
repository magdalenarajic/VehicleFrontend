import { observable, action, makeObservable } from "mobx";
import makeService from "../services/makeService";

class MakeStore {
  constructor() {
    makeObservable(this, {
      status: observable,
      vehicleData: observable,
      singleData: observable,
      xPagination: observable,
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
  xPagination = "";

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
    const singleData = { Name: name, Abrv: abrv };
    makeService.putVehicleMake(id, singleData).then((response) => {
      this.getData();
    });
  };

  sortData = () => {
    makeService
      .getOrderedMakes()
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
    makeService.getFilteredMakes(name)
    .then((result) => {
      this.vehicleData = result.data;
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
      this.status = "error";
    });
  }

  pageData = (pageNumber,pageSize) => {
    makeService.getPagedMakes(pageNumber,pageSize)
    .then((result) => {
      this.vehicleData = result.data;
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
      this.status = "error";
    });
  }
}

const makeStore = new MakeStore();

// makeStore.getSingleData(60).then((result) => console.log(result.data));
export default makeStore;
