import axios from 'axios';

class HotelResultService {
  get() {
    return axios
      .get('http://localhost:8080/rest/rates')
      .then((response) => response.data)
      .catch((error) => {
        console.log(
          'There has been an error in get() in HotelResultService',
          error
        );
      });
  }
}

const hotelResultService = new HotelResultService();

export default hotelResultService;
