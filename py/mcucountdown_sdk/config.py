# McuCountdown SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "McuCountdown",
            "slug": "mcu-countdown",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://www.whenisthenextmcufilm.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "api": {},
                "batman": {},
                "dcn": {},
                "star_war": {},
            },
        },
        "entity": {
      "api": {
        "fields": [
          {
            "name": "days_until",
            "title": "Days Until",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of days until release",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "req": True,
            "short": "TMDB ID of the following production",
          },
          {
            "name": "overview",
            "title": "Overview",
            "type": "`$STRING`",
            "short": "Brief overview/synopsis of the production",
          },
          {
            "name": "poster_url",
            "title": "Poster Url",
            "type": "`$STRING`",
            "short": "URL to the poster image from TMDB",
            "format": "uri",
          },
          {
            "name": "release_date",
            "title": "Release Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Release date in YYYY-MM-DD format",
            "format": "date",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "req": True,
            "short": "Title of the following production",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "req": True,
            "short": "Type of production",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "api",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api",
                "segments": [
                  {
                    "lit": "api",
                  },
                ],
                "parts": [
                  "api",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.following_production`",
                },
                "args": {
                  "query": [
                    {
                      "name": "date",
                      "orig": "date",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "2025-01-01",
                    },
                    {
                      "name": "list_id",
                      "orig": "list_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "1",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "date",
                    "list_id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "batman": {
        "fields": [
          {
            "name": "days_until",
            "title": "Days Until",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of days until release",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "req": True,
            "short": "TMDB ID of the following production",
          },
          {
            "name": "overview",
            "title": "Overview",
            "type": "`$STRING`",
            "short": "Brief overview/synopsis of the production",
          },
          {
            "name": "poster_url",
            "title": "Poster Url",
            "type": "`$STRING`",
            "short": "URL to the poster image from TMDB",
            "format": "uri",
          },
          {
            "name": "release_date",
            "title": "Release Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Release date in YYYY-MM-DD format",
            "format": "date",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "req": True,
            "short": "Title of the following production",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "req": True,
            "short": "Type of production",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "batman",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/batman",
                "segments": [
                  {
                    "lit": "batman",
                  },
                ],
                "parts": [
                  "batman",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.following_production`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "dcn": {
        "fields": [
          {
            "name": "days_until",
            "title": "Days Until",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of days until release",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "req": True,
            "short": "TMDB ID of the following production",
          },
          {
            "name": "overview",
            "title": "Overview",
            "type": "`$STRING`",
            "short": "Brief overview/synopsis of the production",
          },
          {
            "name": "poster_url",
            "title": "Poster Url",
            "type": "`$STRING`",
            "short": "URL to the poster image from TMDB",
            "format": "uri",
          },
          {
            "name": "release_date",
            "title": "Release Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Release date in YYYY-MM-DD format",
            "format": "date",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "req": True,
            "short": "Title of the following production",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "req": True,
            "short": "Type of production",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "dcn",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/dc",
                "segments": [
                  {
                    "lit": "dc",
                  },
                ],
                "parts": [
                  "dc",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.following_production`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "star_war": {
        "fields": [
          {
            "name": "days_until",
            "title": "Days Until",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of days until release",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "req": True,
            "short": "TMDB ID of the following production",
          },
          {
            "name": "overview",
            "title": "Overview",
            "type": "`$STRING`",
            "short": "Brief overview/synopsis of the production",
          },
          {
            "name": "poster_url",
            "title": "Poster Url",
            "type": "`$STRING`",
            "short": "URL to the poster image from TMDB",
            "format": "uri",
          },
          {
            "name": "release_date",
            "title": "Release Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Release date in YYYY-MM-DD format",
            "format": "date",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "req": True,
            "short": "Title of the following production",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "req": True,
            "short": "Type of production",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "star_war",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/star-wars",
                "segments": [
                  {
                    "lit": "star-wars",
                  },
                ],
                "parts": [
                  "star-wars",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.following_production`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
