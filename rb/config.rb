# McuCountdown SDK configuration

module McuCountdownConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "McuCountdown",
        "slug" => "mcu-countdown",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://www.whenisthenextmcufilm.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "api" => {},
          "batman" => {},
          "dcn" => {},
          "star_war" => {},
        },
      },
      "entity" => {
        "api" => {
          "fields" => [
            {
              "name" => "days_until",
              "title" => "Days Until",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Number of days until release",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "TMDB ID of the following production",
            },
            {
              "name" => "overview",
              "title" => "Overview",
              "type" => "`$STRING`",
              "short" => "Brief overview/synopsis of the production",
            },
            {
              "name" => "poster_url",
              "title" => "Poster Url",
              "type" => "`$STRING`",
              "short" => "URL to the poster image from TMDB",
              "format" => "uri",
            },
            {
              "name" => "release_date",
              "title" => "Release Date",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Release date in YYYY-MM-DD format",
              "format" => "date",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Title of the following production",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Type of production",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "api",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                  ],
                  "parts" => [
                    "api",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.following_production`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "date",
                        "orig" => "date",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "2025-01-01",
                      },
                      {
                        "name" => "list_id",
                        "orig" => "list_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "1",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "date",
                      "list_id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "batman" => {
          "fields" => [
            {
              "name" => "days_until",
              "title" => "Days Until",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Number of days until release",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "TMDB ID of the following production",
            },
            {
              "name" => "overview",
              "title" => "Overview",
              "type" => "`$STRING`",
              "short" => "Brief overview/synopsis of the production",
            },
            {
              "name" => "poster_url",
              "title" => "Poster Url",
              "type" => "`$STRING`",
              "short" => "URL to the poster image from TMDB",
              "format" => "uri",
            },
            {
              "name" => "release_date",
              "title" => "Release Date",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Release date in YYYY-MM-DD format",
              "format" => "date",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Title of the following production",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Type of production",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "batman",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/batman",
                  "segments" => [
                    {
                      "lit" => "batman",
                    },
                  ],
                  "parts" => [
                    "batman",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.following_production`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "dcn" => {
          "fields" => [
            {
              "name" => "days_until",
              "title" => "Days Until",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Number of days until release",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "TMDB ID of the following production",
            },
            {
              "name" => "overview",
              "title" => "Overview",
              "type" => "`$STRING`",
              "short" => "Brief overview/synopsis of the production",
            },
            {
              "name" => "poster_url",
              "title" => "Poster Url",
              "type" => "`$STRING`",
              "short" => "URL to the poster image from TMDB",
              "format" => "uri",
            },
            {
              "name" => "release_date",
              "title" => "Release Date",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Release date in YYYY-MM-DD format",
              "format" => "date",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Title of the following production",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Type of production",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "dcn",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/dc",
                  "segments" => [
                    {
                      "lit" => "dc",
                    },
                  ],
                  "parts" => [
                    "dc",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.following_production`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "star_war" => {
          "fields" => [
            {
              "name" => "days_until",
              "title" => "Days Until",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Number of days until release",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "TMDB ID of the following production",
            },
            {
              "name" => "overview",
              "title" => "Overview",
              "type" => "`$STRING`",
              "short" => "Brief overview/synopsis of the production",
            },
            {
              "name" => "poster_url",
              "title" => "Poster Url",
              "type" => "`$STRING`",
              "short" => "URL to the poster image from TMDB",
              "format" => "uri",
            },
            {
              "name" => "release_date",
              "title" => "Release Date",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Release date in YYYY-MM-DD format",
              "format" => "date",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Title of the following production",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Type of production",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "star_war",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/star-wars",
                  "segments" => [
                    {
                      "lit" => "star-wars",
                    },
                  ],
                  "parts" => [
                    "star-wars",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.following_production`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    McuCountdownFeatures.make_feature(name)
  end
end
