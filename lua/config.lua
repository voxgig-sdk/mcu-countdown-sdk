-- McuCountdown SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "McuCountdown",
      slug = "mcu-countdown",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://www.whenisthenextmcufilm.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["api"] = {},
        ["batman"] = {},
        ["dcn"] = {},
        ["star_war"] = {},
      },
    },
    entity = {
      ["api"] = {
        ["fields"] = {
          {
            ["name"] = "days_until",
            ["req"] = true,
            ["short"] = "Number of days until release",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "TMDB ID of the following production",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "overview",
            ["short"] = "Brief overview/synopsis of the production",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "poster_url",
            ["short"] = "URL to the poster image from TMDB",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "release_date",
            ["req"] = true,
            ["short"] = "Release date in YYYY-MM-DD format",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["req"] = true,
            ["short"] = "Title of the following production",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["req"] = true,
            ["short"] = "Type of production",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "api",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "2025-01-01",
                      ["kind"] = "query",
                      ["name"] = "date",
                      ["orig"] = "date",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "1",
                      ["kind"] = "query",
                      ["name"] = "list_id",
                      ["orig"] = "list_id",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api",
                ["parts"] = {
                  "api",
                },
                ["select"] = {
                  ["exist"] = {
                    "date",
                    "list_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.following_production`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["batman"] = {
        ["fields"] = {
          {
            ["name"] = "days_until",
            ["req"] = true,
            ["short"] = "Number of days until release",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "TMDB ID of the following production",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "overview",
            ["short"] = "Brief overview/synopsis of the production",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "poster_url",
            ["short"] = "URL to the poster image from TMDB",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "release_date",
            ["req"] = true,
            ["short"] = "Release date in YYYY-MM-DD format",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["req"] = true,
            ["short"] = "Title of the following production",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["req"] = true,
            ["short"] = "Type of production",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "batman",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/batman",
                ["parts"] = {
                  "batman",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.following_production`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["dcn"] = {
        ["fields"] = {
          {
            ["name"] = "days_until",
            ["req"] = true,
            ["short"] = "Number of days until release",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "TMDB ID of the following production",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "overview",
            ["short"] = "Brief overview/synopsis of the production",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "poster_url",
            ["short"] = "URL to the poster image from TMDB",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "release_date",
            ["req"] = true,
            ["short"] = "Release date in YYYY-MM-DD format",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["req"] = true,
            ["short"] = "Title of the following production",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["req"] = true,
            ["short"] = "Type of production",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "dcn",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/dc",
                ["parts"] = {
                  "dc",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.following_production`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["star_war"] = {
        ["fields"] = {
          {
            ["name"] = "days_until",
            ["req"] = true,
            ["short"] = "Number of days until release",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "TMDB ID of the following production",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "overview",
            ["short"] = "Brief overview/synopsis of the production",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "poster_url",
            ["short"] = "URL to the poster image from TMDB",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "release_date",
            ["req"] = true,
            ["short"] = "Release date in YYYY-MM-DD format",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["req"] = true,
            ["short"] = "Title of the following production",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["req"] = true,
            ["short"] = "Type of production",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "star_war",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/star-wars",
                ["parts"] = {
                  "star-wars",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.following_production`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
