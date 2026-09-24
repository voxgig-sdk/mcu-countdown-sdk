"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'McuCountdown',
        slug: "mcu-countdown",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://www.whenisthenextmcufilm.com",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            api: {},
            batman: {},
            dcn: {},
            star_war: {},
        }
    };
    entity = {
        "api": {
            "fields": [
                {
                    "name": "days_until",
                    "title": "Days Until",
                    "type": "`$INTEGER`",
                    "req": true,
                    "short": "Number of days until release"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "req": true,
                    "short": "TMDB ID of the following production"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`",
                    "short": "Brief overview/synopsis of the production"
                },
                {
                    "name": "poster_url",
                    "title": "Poster Url",
                    "type": "`$STRING`",
                    "short": "URL to the poster image from TMDB",
                    "format": "uri"
                },
                {
                    "name": "release_date",
                    "title": "Release Date",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Release date in YYYY-MM-DD format",
                    "format": "date"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Title of the following production"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Type of production"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "api"
                                }
                            ],
                            "parts": [
                                "api"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.following_production`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "date",
                                        "orig": "date",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2025-01-01"
                                    },
                                    {
                                        "name": "list_id",
                                        "orig": "list_id",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "1"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "date",
                                    "list_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "batman": {
            "fields": [
                {
                    "name": "days_until",
                    "title": "Days Until",
                    "type": "`$INTEGER`",
                    "req": true,
                    "short": "Number of days until release"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "req": true,
                    "short": "TMDB ID of the following production"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`",
                    "short": "Brief overview/synopsis of the production"
                },
                {
                    "name": "poster_url",
                    "title": "Poster Url",
                    "type": "`$STRING`",
                    "short": "URL to the poster image from TMDB",
                    "format": "uri"
                },
                {
                    "name": "release_date",
                    "title": "Release Date",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Release date in YYYY-MM-DD format",
                    "format": "date"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Title of the following production"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Type of production"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "batman"
                                }
                            ],
                            "parts": [
                                "batman"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.following_production`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "dcn": {
            "fields": [
                {
                    "name": "days_until",
                    "title": "Days Until",
                    "type": "`$INTEGER`",
                    "req": true,
                    "short": "Number of days until release"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "req": true,
                    "short": "TMDB ID of the following production"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`",
                    "short": "Brief overview/synopsis of the production"
                },
                {
                    "name": "poster_url",
                    "title": "Poster Url",
                    "type": "`$STRING`",
                    "short": "URL to the poster image from TMDB",
                    "format": "uri"
                },
                {
                    "name": "release_date",
                    "title": "Release Date",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Release date in YYYY-MM-DD format",
                    "format": "date"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Title of the following production"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Type of production"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "dc"
                                }
                            ],
                            "parts": [
                                "dc"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.following_production`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "star_war": {
            "fields": [
                {
                    "name": "days_until",
                    "title": "Days Until",
                    "type": "`$INTEGER`",
                    "req": true,
                    "short": "Number of days until release"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "req": true,
                    "short": "TMDB ID of the following production"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`",
                    "short": "Brief overview/synopsis of the production"
                },
                {
                    "name": "poster_url",
                    "title": "Poster Url",
                    "type": "`$STRING`",
                    "short": "URL to the poster image from TMDB",
                    "format": "uri"
                },
                {
                    "name": "release_date",
                    "title": "Release Date",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Release date in YYYY-MM-DD format",
                    "format": "date"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Title of the following production"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Type of production"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "star-wars"
                                }
                            ],
                            "parts": [
                                "star-wars"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.following_production`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map