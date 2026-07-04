# McuCountdown PHP SDK Reference

Complete API reference for the McuCountdown PHP SDK.


## McuCountdownSDK

### Constructor

```php
require_once __DIR__ . '/mcu-countdown_sdk.php';

$client = new McuCountdownSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `McuCountdownSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = McuCountdownSDK::test();
```


### Instance Methods

#### `Api($data = null)`

Create a new `ApiEntity` instance. Pass `null` for no initial data.

#### `Batman($data = null)`

Create a new `BatmanEntity` instance. Pass `null` for no initial data.

#### `Dcn($data = null)`

Create a new `DcnEntity` instance. Pass `null` for no initial data.

#### `StarWar($data = null)`

Create a new `StarWarEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ApiEntity

```php
$api = $client->api();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->api()->load(["id" => "api_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ApiEntity`

Create a new `ApiEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## BatmanEntity

```php
$batman = $client->batman();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->batman()->load(["id" => "batman_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): BatmanEntity`

Create a new `BatmanEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## DcnEntity

```php
$dcn = $client->dcn();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->dcn()->load(["id" => "dcn_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): DcnEntity`

Create a new `DcnEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## StarWarEntity

```php
$star_war = $client->star_war();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->star_war()->load(["id" => "star_war_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): StarWarEntity`

Create a new `StarWarEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new McuCountdownSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

