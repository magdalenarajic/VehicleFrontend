import axios from "axios";

const errorHandler = (error) => {
  console.log(error);
};

const baseUrl = "http://localhost:44304/api";

class MakeService {
  getVehicleMakes = () => {
    return axios.get(`${baseUrl}/VehicleMakes`).catch(errorHandler);
  };


  item = {
    Name: " ",
    Abrv: " "
  };
  postVehicleMake = (item) => {
    axios.post(`${baseUrl}/VehicleMakes`, item).catch(errorHandler);
  };


  deleteVehicleMake = (id) => {
    return axios.delete(`${baseUrl}/VehicleMakes/${id}`)
    .catch(errorHandler);
  };

  putVehicleMake = (id,item) => {
    axios.put(`${baseUrl}/VehicleMakes/${id}`, item).catch(errorHandler);
  };

}
const makeService = new MakeService();
export default makeService;
// testing -- getVehicleMakes().then((result) => console.log(result));
