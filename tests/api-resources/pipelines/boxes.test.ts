// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Streak from 'streak';

const client = new Streak({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource boxes', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.pipelines.boxes.list('pipelineKey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.pipelines.boxes.list(
        'pipelineKey',
        { limit: 0, page: 0, sortBy: 'sortBy', stageKey: 'stageKey' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Streak.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('batchGet', async () => {
    const responsePromise = client.pipelines.boxes.batchGet('pipelineKey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('batchGet: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.pipelines.boxes.batchGet(
        'pipelineKey',
        { RAW_BODY: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Streak.NotFoundError);
  });
});
