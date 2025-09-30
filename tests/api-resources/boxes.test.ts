// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Streak from 'streak';

const client = new Streak({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource boxes', () => {
  // Prism tests are disabled
  test.skip('addThread: only required params', async () => {
    const responsePromise = client.boxes.addThread('key', {
      boxKey: 'boxKey',
      threadGmailId: 'threadGmailId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('addThread: required and optional params', async () => {
    const response = await client.boxes.addThread('key', {
      boxKey: 'boxKey',
      threadGmailId: 'threadGmailId',
    });
  });
});
