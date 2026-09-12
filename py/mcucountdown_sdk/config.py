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
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "req": True,
            "short": "Number of days until release",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "req": True,
            "short": "TMDB ID of the following production",
            "type": "`$INTEGER`",
          },
          {
            "name": "overview",
            "short": "Brief overview/synopsis of the production",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "poster_url",
            "short": "URL to the poster image from TMDB",
            "type": "`$STRING`",
          },
          {
            "format": "date",
            "name": "release_date",
            "req": True,
            "short": "Release date in YYYY-MM-DD format",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "req": True,
            "short": "Title of the following production",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "short": "Type of production",
            "type": "`$STRING`",
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
                "args": {
                  "query": [
                    {
                      "example": "2025-01-01",
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "1",
                      "kind": "query",
                      "name": "list_id",
                      "orig": "list_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api",
                "segments": [
                  {
                    "lit": "api",
                  },
                ],
                "select": {
                  "exist": [
                    "date",
                    "list_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.following_production`",
                },
                "parts": [
                  "api",
                ],
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
            "req": True,
            "short": "Number of days until release",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "req": True,
            "short": "TMDB ID of the following production",
            "type": "`$INTEGER`",
          },
          {
            "name": "overview",
            "short": "Brief overview/synopsis of the production",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "poster_url",
            "short": "URL to the poster image from TMDB",
            "type": "`$STRING`",
          },
          {
            "format": "date",
            "name": "release_date",
            "req": True,
            "short": "Release date in YYYY-MM-DD format",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "req": True,
            "short": "Title of the following production",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "short": "Type of production",
            "type": "`$STRING`",
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
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/batman",
                "segments": [
                  {
                    "lit": "batman",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.following_production`",
                },
                "parts": [
                  "batman",
                ],
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
            "req": True,
            "short": "Number of days until release",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "req": True,
            "short": "TMDB ID of the following production",
            "type": "`$INTEGER`",
          },
          {
            "name": "overview",
            "short": "Brief overview/synopsis of the production",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "poster_url",
            "short": "URL to the poster image from TMDB",
            "type": "`$STRING`",
          },
          {
            "format": "date",
            "name": "release_date",
            "req": True,
            "short": "Release date in YYYY-MM-DD format",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "req": True,
            "short": "Title of the following production",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "short": "Type of production",
            "type": "`$STRING`",
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
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/dc",
                "segments": [
                  {
                    "lit": "dc",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.following_production`",
                },
                "parts": [
                  "dc",
                ],
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
            "req": True,
            "short": "Number of days until release",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "req": True,
            "short": "TMDB ID of the following production",
            "type": "`$INTEGER`",
          },
          {
            "name": "overview",
            "short": "Brief overview/synopsis of the production",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "poster_url",
            "short": "URL to the poster image from TMDB",
            "type": "`$STRING`",
          },
          {
            "format": "date",
            "name": "release_date",
            "req": True,
            "short": "Release date in YYYY-MM-DD format",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "req": True,
            "short": "Title of the following production",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "short": "Type of production",
            "type": "`$STRING`",
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
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/star-wars",
                "segments": [
                  {
                    "lit": "star-wars",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.following_production`",
                },
                "parts": [
                  "star-wars",
                ],
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
