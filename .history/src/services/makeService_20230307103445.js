import axios from 'axios';

const errorHandler = error => {
    console.log(error);
};

const baseUrl = 'https://localhost:44304/api';

export const getVehicleMakes = () => {
        return axios.get(`${baseUrl}/VehicleMakes`).catch(errorHandler);
    };

getVehicleMakes().then((result) => console.log(result));
export default getVehicleMakes;