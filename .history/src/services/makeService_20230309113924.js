import axios from "axios";

const errorHandler = (error) => {
  console.log(error);
};

const baseUrl = "https://localhost:44304/api/VehicleMakes"

class MakeService {
  getVehicleMakes = () => {
    return axios.get(`${baseUrl}`).catch(errorHandler);
  };

  getVehicleMake = (id) => {
       return axios.get(`${baseUrl}/${id}`).catch(errorHandler);
  };


  item = {
    Name: " ",
    Abrv: " "
  };
  postVehicleMake = (item) => {
    return axios.post(`${baseUrl}`, item).catch(errorHandler);
  };


  deleteVehicleMake = (id) => {
    return axios.delete(`${baseUrl}/${id}/`)
    .catch(errorHandler);
  };

  putVehicleMake = (id,item) => {
    axios.put(`${baseUrl}/${id}`, item).catch(errorHandler);
  };

}
const makeService = new MakeService();
export default makeService;
// testing -- getVehicleMakes().then((result) => console.log(result));