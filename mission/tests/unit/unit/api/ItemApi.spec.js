/**
 * @jest-environment node
 * https://stackoverflow.com/questions/67555622/jest-express-error-cross-origin-http-localhost-forbidden
 * https://jestjs.io/docs/configuration#testenvironment-string
 */

import ItemApi from '@/api/Item/ItemApi';

describe('ItemApi', () => {
  const SUCCESS = 200;
  let itemApiClient;

  beforeEach(() => {
    itemApiClient = new ItemApi();
  });

  it('returns response code with 200', async () => {
    const testItemNo = 1;
    const apiResult = await itemApiClient.getItemInfo(testItemNo);

    expect(apiResult.status).toBe(SUCCESS);
  });
});
