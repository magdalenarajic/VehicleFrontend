import axios from "axios";

const errorHandler = (error) => {
  console.log(error);
};

const baseUrl = "https://localhost:44304/api/VehicleModels";

class ModelService {
    getVehicleModels = () => {
        return axios.get(`${baseUrl}`).catch(errorHandler);
      };
    
      getVehicleModel = (id) => {
        return axios.get(`${baseUrl}/${id}`).catch(errorHandler);
      };
    
      item = {
        Name: " ",
        Abrv: " ",
        MakeId: " ",
      };
      postVehicleModel = (item) => {
        return axios.post(`${baseUrl}`, item).catch(errorHandler);
      };
    
      deleteVehicleModel = (id) => {
        return axios.delete(`${baseUrl}/${id}/`).catch(errorHandler);
      };
    
      putVehicleMake = (id, item) => {
        return axios.put(`${baseUrl}/${id}`, item).catch(errorHandler);
      };

}

const modelService = new ModelService();
export default modelService;