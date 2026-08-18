# McuCountdown SDK configuration


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
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "overview",
            "type": "`$STRING`",
          },
          {
            "name": "poster_url",
            "type": "`$STRING`",
          },
          {
            "name": "release_date",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "type": "`$STRING`",
          },
        ],
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
                "parts": [
                  "api",
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
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "overview",
            "type": "`$STRING`",
          },
          {
            "name": "poster_url",
            "type": "`$STRING`",
          },
          {
            "name": "release_date",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "type": "`$STRING`",
          },
        ],
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
                "parts": [
                  "batman",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.following_production`",
                },
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
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "overview",
            "type": "`$STRING`",
          },
          {
            "name": "poster_url",
            "type": "`$STRING`",
          },
          {
            "name": "release_date",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "type": "`$STRING`",
          },
        ],
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
                "parts": [
                  "dc",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.following_production`",
                },
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
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "overview",
            "type": "`$STRING`",
          },
          {
            "name": "poster_url",
            "type": "`$STRING`",
          },
          {
            "name": "release_date",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "type": "`$STRING`",
          },
        ],
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
                "parts": [
                  "star-wars",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.following_production`",
                },
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
