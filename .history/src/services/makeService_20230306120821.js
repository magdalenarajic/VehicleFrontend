import axios from 'axios';

const errorHandler = error => {
    console.log(error);
};

const baseUrl = 'https://localhost:44304/api';

class makeService {
    getVehicleMakes(){
        return axios.get(`${baseUrl}/VehicleMakes`).catch(errorHandler);
    }

    getVehicleMake(id){
        return axios.get(`${baseUrl}/VehicleMakes?id=${id}`).catch(errorHandler);
    }
};

export default makeService();