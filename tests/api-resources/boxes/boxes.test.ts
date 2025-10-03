// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Streak from 'streak';

const client = new Streak({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource boxes', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.boxes.retrieve('boxKey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.boxes.update('boxKey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.boxes.update(
        'boxKey',
        {
          assignedToSharingEntries: ['string'],
          contacts: [{ isStarred: true, key: 'key', isAutoboxed: true }],
          fields: 'fields',
          followerKeys: ['string'],
          linkedBoxKeys: ['string'],
          name: 'name',
          notes: 'notes',
          organizations: [{ isStarred: true, key: 'key', 'isAutoboxed*': true }],
          stageKey: 'stageKey',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Streak.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.boxes.delete('boxKey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getNewsfeed', async () => {
    const responsePromise = client.boxes.getNewsfeed('key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getNewsfeed: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.boxes.getNewsfeed('key', { detailLevel: 'detailLevel' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Streak.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listFiles', async () => {
    const responsePromise = client.boxes.listFiles('key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listThreads', async () => {
    const responsePromise = client.boxes.listThreads('key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateMultipleFields: only required params', async () => {
    const responsePromise = client.boxes.updateMultipleFields('key', { fields: 'fields' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateMultipleFields: required and optional params', async () => {
    const response = await client.boxes.updateMultipleFields('key', { fields: 'fields' });
  });
});
