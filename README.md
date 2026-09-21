# Streak TypeScript API Library

[![NPM version](<https://img.shields.io/npm/v/@streakyc/streak.svg?label=npm%20(stable)>)](https://npmjs.org/package/@streakyc/streak) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@streakyc/streak) [![JSR Version](https://jsr.io/badges/@streak-api/streak)](https://jsr.io/@streak-api/streak)

This library provides convenient access to the Streak REST API from server-side TypeScript or JavaScript.

The REST API documentation can be found on [streak.readme.io](https://streak.readme.io/). The full API of this library can be found in [api.md](api.md).

## Installation

```sh
npm install @streakyc/streak
```

## Usage

The full API of this library can be found in [api.md](api.md).

```js
import Streak from '@streakyc/streak';

const client = new Streak({
  apiKey: 'strk_1234',
});

const user = await client.users.getCurrentUser();

console.log(user.archiveKeysetFileLink);
```

### Request & Response types

This library includes TypeScript definitions for all request params and response fields. You may import and use them like so:

```ts
import Streak from '@streakyc/streak';

const client = new Streak({
  apiKey: 'strk_1234',
});

const user: Streak.User = await client.users.getCurrentUser();
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

```ts
const user = await client.users.getCurrentUser().catch(async (err) => {
  if (err instanceof Streak.APIError) {
    console.log(err.status); // 400
    console.log(err.name); // BadRequestError
    console.log(err.headers); // {server: 'nginx', ...}
  } else {
    throw err;
  }
});
```

Error codes are as follows:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,
429 Rate Limit, and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

```js
// Configure the default for all requests:
const client = new Streak({
  maxRetries: 0, // default is 2
});

// Or, configure per-request:
await client.users.getCurrentUser({
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 1 minute by default. You can configure this with a `timeout` option:

```ts
// Configure the default for all requests:
const client = new Streak({
  timeout: 20 * 1000, // 20 seconds (default is 1 minute)
});

// Override per-request:
await client.users.getCurrentUser({
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Advanced Usage

### Accessing raw Response data (e.g., headers)

The "raw" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.
This method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.

You can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.
Unlike `.asResponse()` this method consumes the body, returning once it is parsed.

<!-- prettier-ignore -->
```ts
const client = new Streak();

const response = await client.users.getCurrentUser().asResponse();
console.log(response.headers.get('X-My-Header'));
console.log(response.statusText); // access the underlying Response object

const { data: user, response: raw } = await client.users.getCurrentUser().withResponse();
console.log(raw.headers.get('X-My-Header'));
console.log(user.archiveKeysetFileLink);
```

## Frequently Asked Questions

## Semantic versioning

This package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/StreakYC/streak-client-typescript/issues) with questions, bugs, or suggestions.
