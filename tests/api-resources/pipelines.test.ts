// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Streak from 'streak';

const client = new Streak({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pipelines', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.pipelines.create({ name: 'name', teamKey: 'teamKey' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.pipelines.create({
      name: 'name',
      teamKey: 'teamKey',
      fieldNames: 'fieldNames',
      fieldTypes: 'fieldTypes',
      stageNames: 'stageNames',
      teamWide: true,
    });
  });

  // Prism tests are disabled
  test.skip('createField: only required params', async () => {
    const responsePromise = client.pipelines.createField('pipelineKey', { name: 'name', type: 'type' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createField: required and optional params', async () => {
    const response = await client.pipelines.createField('pipelineKey', { name: 'name', type: 'type' });
  });

  // Prism tests are disabled
  test.skip('createStage: only required params', async () => {
    const responsePromise = client.pipelines.createStage('pipelineKey', { name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createStage: required and optional params', async () => {
    const response = await client.pipelines.createStage('pipelineKey', { name: 'name' });
  });
});
