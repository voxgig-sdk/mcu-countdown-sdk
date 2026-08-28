# McuCountdown TypeScript SDK Reference

Complete API reference for the McuCountdown TypeScript SDK.


## McuCountdownSDK

### Constructor

```ts
new McuCountdownSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `McuCountdownSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = McuCountdownSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `McuCountdownSDK` instance in test mode.


### Instance Methods

#### `Api(data?: object)`

Create a new `Api` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntity` instance.

#### `Batman(data?: object)`

Create a new `Batman` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BatmanEntity` instance.

#### `Dcn(data?: object)`

Create a new `Dcn` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DcnEntity` instance.

#### `StarWar(data?: object)`

Create a new `StarWar` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StarWarEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `McuCountdownSDK.test()`.

**Returns:** `McuCountdownSDK` instance in test mode.


---

## ApiEntity

```ts
const api = client.Api()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days_until` | `number` | Yes | Number of days until release |
| `id` | `number` | Yes | TMDB ID of the following production |
| `overview` | `string` | No | Brief overview/synopsis of the production |
| `poster_url` | `string` | No | URL to the poster image from TMDB |
| `release_date` | `string` | Yes | Release date in YYYY-MM-DD format |
| `title` | `string` | Yes | Title of the following production |
| `type` | `string` | Yes | Type of production |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Api().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntity` instance with the same client and
options.

#### `client()`

Return the parent `McuCountdownSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BatmanEntity

```ts
const batman = client.Batman()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days_until` | `number` | Yes | Number of days until release |
| `id` | `number` | Yes | TMDB ID of the following production |
| `overview` | `string` | No | Brief overview/synopsis of the production |
| `poster_url` | `string` | No | URL to the poster image from TMDB |
| `release_date` | `string` | Yes | Release date in YYYY-MM-DD format |
| `title` | `string` | Yes | Title of the following production |
| `type` | `string` | Yes | Type of production |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Batman().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BatmanEntity` instance with the same client and
options.

#### `client()`

Return the parent `McuCountdownSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DcnEntity

```ts
const dcn = client.Dcn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days_until` | `number` | Yes | Number of days until release |
| `id` | `number` | Yes | TMDB ID of the following production |
| `overview` | `string` | No | Brief overview/synopsis of the production |
| `poster_url` | `string` | No | URL to the poster image from TMDB |
| `release_date` | `string` | Yes | Release date in YYYY-MM-DD format |
| `title` | `string` | Yes | Title of the following production |
| `type` | `string` | Yes | Type of production |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Dcn().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DcnEntity` instance with the same client and
options.

#### `client()`

Return the parent `McuCountdownSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StarWarEntity

```ts
const star_war = client.StarWar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days_until` | `number` | Yes | Number of days until release |
| `id` | `number` | Yes | TMDB ID of the following production |
| `overview` | `string` | No | Brief overview/synopsis of the production |
| `poster_url` | `string` | No | URL to the poster image from TMDB |
| `release_date` | `string` | Yes | Release date in YYYY-MM-DD format |
| `title` | `string` | Yes | Title of the following production |
| `type` | `string` | Yes | Type of production |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.StarWar().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StarWarEntity` instance with the same client and
options.

#### `client()`

Return the parent `McuCountdownSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new McuCountdownSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

