# McuCountdown SDK

Find out when the next Marvel Cinematic Universe film (or Star Wars, DC, Batman title) releases

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About MCU-Countdown

MCU-Countdown is a small public API maintained by [DiljotSG](https://github.com/DiljotSG/MCU-Countdown) that tells you when the next Marvel Cinematic Universe film or series releases. It is a thin wrapper around curated [TMDB](https://www.themoviedb.org/) lists, exposed under [whenisthenextmcufilm.com](https://www.whenisthenextmcufilm.com).

The API returns a single JSON object describing the next upcoming production, with fields such as production ID, title, type (Movie or Series), release date, days remaining, overview, and a poster URL, plus a peek at the production after that one.

Alongside the default MCU list, named routes are provided for adjacent franchises (`/star-wars`, `/dc`, `/batman`), and any custom TMDB list can be queried via `?list_id=...`. A `?date=YYYY-MM-DD` parameter lets you ask what is next relative to a specific date.

No authentication is required, CORS is enabled, and responses are typically served in under a couple of hundred milliseconds. The project is open source and can be self-hosted if you prefer to run your own instance.

## Try it

**TypeScript**
```bash
npm install mcu-countdown
```

**Python**
```bash
pip install mcu-countdown-sdk
```

**PHP**
```bash
composer require voxgig/mcu-countdown-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/mcu-countdown-sdk/go
```

**Ruby**
```bash
gem install mcu-countdown-sdk
```

**Lua**
```bash
luarocks install mcu-countdown-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { McuCountdownSDK } from 'mcu-countdown'

const client = new McuCountdownSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o mcu-countdown-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "mcu-countdown": {
      "command": "/abs/path/to/mcu-countdown-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Api** | The default MCU countdown endpoint at `/api`, returning the next upcoming Marvel Cinematic Universe film or series from TMDB. | `/api` |
| **Batman** | Batman-franchise variant of the countdown, served from the `/batman` route. | `/batman` |
| **Dcn** | DC-universe variant of the countdown, served from the `/dc` route. | `/dc` |
| **StarWar** | Star Wars variant of the countdown, served from the `/star-wars` route. | `/star-wars` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from mcucountdown_sdk import McuCountdownSDK

client = McuCountdownSDK({})


# Load a specific api
api, err = client.Api(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'mcucountdown_sdk.php';

$client = new McuCountdownSDK([]);


// Load a specific api
[$api, $err] = $client->Api(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/mcu-countdown-sdk/go"

client := sdk.NewMcuCountdownSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "McuCountdown_sdk"

client = McuCountdownSDK.new({})


# Load a specific api
api, err = client.Api(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("mcu-countdown_sdk")

local client = sdk.new({})


-- Load a specific api
local api, err = client:Api(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = McuCountdownSDK.test()
const result = await client.Api().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = McuCountdownSDK.test(None, None)
result, err = client.Api(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = McuCountdownSDK::test(null, null);
[$result, $err] = $client->Api(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Api(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = McuCountdownSDK.test(nil, nil)
result, err = client.Api(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Api(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the MCU-Countdown

- Upstream: [https://www.whenisthenextmcufilm.com](https://www.whenisthenextmcufilm.com)
- API docs: [https://github.com/DiljotSG/MCU-Countdown](https://github.com/DiljotSG/MCU-Countdown)

- Source code is released under the GPL-3.0 license by [DiljotSG](https://github.com/DiljotSG/MCU-Countdown).
- Film metadata is provided via [The Movie Database (TMDB)](https://www.themoviedb.org/) and is subject to TMDB's terms of use.
- The hosted instance at `whenisthenextmcufilm.com` is operated by the project maintainer; you may also self-host via Docker Compose.
- This product uses the TMDB API but is not endorsed or certified by TMDB.

---

Generated from the MCU-Countdown OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
