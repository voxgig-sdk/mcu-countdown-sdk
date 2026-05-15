# McuCountdown Python SDK Reference

Complete API reference for the McuCountdown Python SDK.


## McuCountdownSDK

### Constructor

```python
from mcu-countdown_sdk import McuCountdownSDK

client = McuCountdownSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `McuCountdownSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = McuCountdownSDK.test()
```


### Instance Methods

#### `Api(data=None)`

Create a new `ApiEntity` instance. Pass `None` for no initial data.

#### `Batman(data=None)`

Create a new `BatmanEntity` instance. Pass `None` for no initial data.

#### `Dcn(data=None)`

Create a new `DcnEntity` instance. Pass `None` for no initial data.

#### `StarWar(data=None)`

Create a new `StarWarEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## ApiEntity

```python
api = client.Api()
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

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Api().load({"id": "api_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BatmanEntity

```python
batman = client.Batman()
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

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Batman().load({"id": "batman_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BatmanEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DcnEntity

```python
dcn = client.Dcn()
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

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Dcn().load({"id": "dcn_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DcnEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StarWarEntity

```python
star_war = client.StarWar()
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

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.StarWar().load({"id": "star_war_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StarWarEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = McuCountdownSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

