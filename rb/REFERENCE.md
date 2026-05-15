# McuCountdown Ruby SDK Reference

Complete API reference for the McuCountdown Ruby SDK.


## McuCountdownSDK

### Constructor

```ruby
require_relative 'mcu-countdown_sdk'

client = McuCountdownSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `McuCountdownSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = McuCountdownSDK.test
```


### Instance Methods

#### `Api(data = nil)`

Create a new `Api` entity instance. Pass `nil` for no initial data.

#### `Batman(data = nil)`

Create a new `Batman` entity instance. Pass `nil` for no initial data.

#### `Dcn(data = nil)`

Create a new `Dcn` entity instance. Pass `nil` for no initial data.

#### `StarWar(data = nil)`

Create a new `StarWar` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## ApiEntity

```ruby
api = client.Api
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days_until` | ``$INTEGER`` | Yes |  |
| `following_production` | ``$OBJECT`` | Yes |  |
| `id` | ``$INTEGER`` | Yes |  |
| `overview` | ``$STRING`` | No |  |
| `poster_url` | ``$STRING`` | No |  |
| `release_date` | ``$STRING`` | Yes |  |
| `title` | ``$STRING`` | Yes |  |
| `type` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Api.load({ "id" => "api_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BatmanEntity

```ruby
batman = client.Batman
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days_until` | ``$INTEGER`` | Yes |  |
| `following_production` | ``$OBJECT`` | Yes |  |
| `id` | ``$INTEGER`` | Yes |  |
| `overview` | ``$STRING`` | No |  |
| `poster_url` | ``$STRING`` | No |  |
| `release_date` | ``$STRING`` | Yes |  |
| `title` | ``$STRING`` | Yes |  |
| `type` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Batman.load({ "id" => "batman_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BatmanEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DcnEntity

```ruby
dcn = client.Dcn
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days_until` | ``$INTEGER`` | Yes |  |
| `following_production` | ``$OBJECT`` | Yes |  |
| `id` | ``$INTEGER`` | Yes |  |
| `overview` | ``$STRING`` | No |  |
| `poster_url` | ``$STRING`` | No |  |
| `release_date` | ``$STRING`` | Yes |  |
| `title` | ``$STRING`` | Yes |  |
| `type` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Dcn.load({ "id" => "dcn_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DcnEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StarWarEntity

```ruby
star_war = client.StarWar
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days_until` | ``$INTEGER`` | Yes |  |
| `following_production` | ``$OBJECT`` | Yes |  |
| `id` | ``$INTEGER`` | Yes |  |
| `overview` | ``$STRING`` | No |  |
| `poster_url` | ``$STRING`` | No |  |
| `release_date` | ``$STRING`` | Yes |  |
| `title` | ``$STRING`` | Yes |  |
| `type` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.StarWar.load({ "id" => "star_war_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StarWarEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = McuCountdownSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

