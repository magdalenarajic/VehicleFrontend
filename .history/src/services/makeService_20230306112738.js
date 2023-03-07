import axios from 'axios';

const errorHandler = error => {
    console.log(error);
};

const baseUrl = 'https://localhost:44304/api';

class makeService {
    getVehicleMakes(){
        return axios.get(`${baseUrl}/VehicleMakes`).catch(errorHandler);
    }
};
