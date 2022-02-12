import axios from 'axios';

class BaseClient {
  constructor() {
    const baseURL = 'https://virtserver.swaggerhub.com/lkaybob/projectlion-vue/1.0.0';
    const apikey = 'abcd1234';

    this.instance = axios.create({
      baseURL,
      headers: {
        authorization: apikey,
      },
    });
  }
}

export default BaseClient;
