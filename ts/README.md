# McuCountdown TypeScript SDK



The TypeScript SDK for the McuCountdown API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Api()` — each with a small set of operations (`load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/mcu-countdown-sdk/releases](https://github.com/voxgig-sdk/mcu-countdown-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { McuCountdownSDK } from '@voxgig-sdk/mcu-countdown'

const client = new McuCountdownSDK()
```

### 3. Load an api

`load()` returns the entity directly and throws on failure:

```ts
try {
  const api = await client.Api().load({ id: 1 })
  console.log(api)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const api = await client.Api().load({ id: 1 })
  console.log(api)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = McuCountdownSDK.test()

const api = await client.Api().load({ id: 1 })
// api is a bare entity populated with mock response data
console.log(api)
```

You can also use the instance method:

```ts
const client = new McuCountdownSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Api()

// First call runs the operation and stores its result
await entity.load({ id: 1 })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new McuCountdownSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
MCU_COUNTDOWN_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### McuCountdownSDK

#### Constructor

```ts
new McuCountdownSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Api(data?)` | `ApiEntity` | Create an Api entity instance. |
| `Batman(data?)` | `BatmanEntity` | Create a Batman entity instance. |
| `Dcn(data?)` | `DcnEntity` | Create a Dcn entity instance. |
| `StarWar(data?)` | `StarWarEntity` | Create a StarWar entity instance. |
| `tester(testopts?, sdkopts?)` | `McuCountdownSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `McuCountdownSDK.test(testopts?, sdkopts?)` | `McuCountdownSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): McuCountdownSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` resolves to a single entity object.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Api

| Field | Description |
| --- | --- |
| `days_until` |  |
| `following_production` |  |
| `id` |  |
| `overview` |  |
| `poster_url` |  |
| `release_date` |  |
| `title` |  |
| `type` |  |

Operations: load.

API path: `/api`

#### Batman

| Field | Description |
| --- | --- |
| `days_until` |  |
| `following_production` |  |
| `id` |  |
| `overview` |  |
| `poster_url` |  |
| `release_date` |  |
| `title` |  |
| `type` |  |

Operations: load.

API path: `/batman`

#### Dcn

| Field | Description |
| --- | --- |
| `days_until` |  |
| `following_production` |  |
| `id` |  |
| `overview` |  |
| `poster_url` |  |
| `release_date` |  |
| `title` |  |
| `type` |  |

Operations: load.

API path: `/dc`

#### StarWar

| Field | Description |
| --- | --- |
| `days_until` |  |
| `following_production` |  |
| `id` |  |
| `overview` |  |
| `poster_url` |  |
| `release_date` |  |
| `title` |  |
| `type` |  |

Operations: load.

API path: `/star-wars`



## Entities


### Api

Create an instance: `const api = client.Api()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days_until` | `number` |  |
| `following_production` | `Record<string, any>` |  |
| `id` | `number` |  |
| `overview` | `string` |  |
| `poster_url` | `string` |  |
| `release_date` | `string` |  |
| `title` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const api = await client.Api().load({ id: 1 })
```


### Batman

Create an instance: `const batman = client.Batman()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days_until` | `number` |  |
| `following_production` | `Record<string, any>` |  |
| `id` | `number` |  |
| `overview` | `string` |  |
| `poster_url` | `string` |  |
| `release_date` | `string` |  |
| `title` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const batman = await client.Batman().load({ id: 1 })
```


### Dcn

Create an instance: `const dcn = client.Dcn()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days_until` | `number` |  |
| `following_production` | `Record<string, any>` |  |
| `id` | `number` |  |
| `overview` | `string` |  |
| `poster_url` | `string` |  |
| `release_date` | `string` |  |
| `title` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const dcn = await client.Dcn().load({ id: 1 })
```


### StarWar

Create an instance: `const star_war = client.StarWar()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days_until` | `number` |  |
| `following_production` | `Record<string, any>` |  |
| `id` | `number` |  |
| `overview` | `string` |  |
| `poster_url` | `string` |  |
| `release_date` | `string` |  |
| `title` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const star_war = await client.StarWar().load({ id: 1 })
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
mcu-countdown/
├── src/
│   ├── McuCountdownSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { McuCountdownSDK } from '@voxgig-sdk/mcu-countdown'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const api = client.Api()
await api.load({ id: 1 })

// api.data() now returns the api data from the last `load`
// api.match() returns { id: 1 }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
