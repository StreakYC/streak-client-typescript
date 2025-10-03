// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Streak from 'streak';

const client = new Streak({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource newsfeed', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.pipelines.newsfeed.retrieve('key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.pipelines.newsfeed.retrieve(
        'key',
        { detailLevel: 'detailLevel' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Streak.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('exportFull', async () => {
    const responsePromise = client.pipelines.newsfeed.exportFull('key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('exportFull: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.pipelines.newsfeed.exportFull(
        'key',
        { includeSpecifics: 'includeSpecifics', startTimestamp: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Streak.NotFoundError);
  });
});
