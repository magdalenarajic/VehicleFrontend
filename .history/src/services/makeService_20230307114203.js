import axios from 'axios';

const errorHandler = error => {
    console.log(error);
};

const baseUrl = 'https://localhost:44304/api';

class MakeService{

     getVehicleMakes = () => {
        return axios.get(`${baseUrl}/VehicleMakes`).catch(errorHandler);
};

}
export default MakeService;
// testing -- getVehicleMakes().then((result) => console.log(result));