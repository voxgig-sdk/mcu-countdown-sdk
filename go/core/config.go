package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "McuCountdown",
			"slug": "mcu-countdown",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://www.whenisthenextmcufilm.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"api": map[string]any{},
				"batman": map[string]any{},
				"dcn": map[string]any{},
				"star_war": map[string]any{},
			},
		},
		"entity": map[string]any{
			"api": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "days_until",
						"req": true,
						"short": "Number of days until release",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "TMDB ID of the following production",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "overview",
						"short": "Brief overview/synopsis of the production",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "poster_url",
						"short": "URL to the poster image from TMDB",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "release_date",
						"req": true,
						"short": "Release date in YYYY-MM-DD format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"short": "Title of the following production",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "Type of production",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "api",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "2025-01-01",
											"kind": "query",
											"name": "date",
											"orig": "date",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "1",
											"kind": "query",
											"name": "list_id",
											"orig": "list_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"date",
										"list_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.following_production`",
								},
								"parts": []any{
									"api",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"batman": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "days_until",
						"req": true,
						"short": "Number of days until release",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "TMDB ID of the following production",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "overview",
						"short": "Brief overview/synopsis of the production",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "poster_url",
						"short": "URL to the poster image from TMDB",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "release_date",
						"req": true,
						"short": "Release date in YYYY-MM-DD format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"short": "Title of the following production",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "Type of production",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "batman",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/batman",
								"segments": []any{
									map[string]any{
										"lit": "batman",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.following_production`",
								},
								"parts": []any{
									"batman",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dcn": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "days_until",
						"req": true,
						"short": "Number of days until release",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "TMDB ID of the following production",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "overview",
						"short": "Brief overview/synopsis of the production",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "poster_url",
						"short": "URL to the poster image from TMDB",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "release_date",
						"req": true,
						"short": "Release date in YYYY-MM-DD format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"short": "Title of the following production",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "Type of production",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dcn",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/dc",
								"segments": []any{
									map[string]any{
										"lit": "dc",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.following_production`",
								},
								"parts": []any{
									"dc",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"star_war": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "days_until",
						"req": true,
						"short": "Number of days until release",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "TMDB ID of the following production",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "overview",
						"short": "Brief overview/synopsis of the production",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "poster_url",
						"short": "URL to the poster image from TMDB",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "release_date",
						"req": true,
						"short": "Release date in YYYY-MM-DD format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"short": "Title of the following production",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "Type of production",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "star_war",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/star-wars",
								"segments": []any{
									map[string]any{
										"lit": "star-wars",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.following_production`",
								},
								"parts": []any{
									"star-wars",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
