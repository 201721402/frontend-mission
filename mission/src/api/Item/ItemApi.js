import BaseClient from '@/api/BaseClient';

export default class ItemApi {
  constructor(clientInstance) {
    this.clientInstance = clientInstance || new BaseClient().instance;
  }

  async getItemInfo(itemNo) {
    const result = await this.clientInstance.get(`/item/${itemNo}`);

    return result;
  }

  async getItemList() {
    const result = await this.clientInstance.get('/item');

    return result;
  }
}
