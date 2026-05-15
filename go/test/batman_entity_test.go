package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/mcu-countdown-sdk"
	"github.com/voxgig-sdk/mcu-countdown-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestBatmanEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Batman(nil)
		if ent == nil {
			t.Fatal("expected non-nil BatmanEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := batmanBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "batman." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set MCUCOUNTDOWN_TEST_BATMAN_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		batmanRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.batman", setup.data)))
		var batmanRef01Data map[string]any
		if len(batmanRef01DataRaw) > 0 {
			batmanRef01Data = core.ToMapAny(batmanRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = batmanRef01Data

		// LOAD
		batmanRef01Ent := client.Batman(nil)
		batmanRef01MatchDt0 := map[string]any{
			"id": batmanRef01Data["id"],
		}
		batmanRef01DataDt0Loaded, err := batmanRef01Ent.Load(batmanRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		batmanRef01DataDt0LoadResult := core.ToMapAny(batmanRef01DataDt0Loaded)
		if batmanRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if batmanRef01DataDt0LoadResult["id"] != batmanRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func batmanBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "batman", "BatmanTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read batman test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse batman test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"batman01", "batman02", "batman03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("MCUCOUNTDOWN_TEST_BATMAN_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MCUCOUNTDOWN_TEST_BATMAN_ENTID": idmap,
		"MCUCOUNTDOWN_TEST_LIVE":      "FALSE",
		"MCUCOUNTDOWN_TEST_EXPLAIN":   "FALSE",
		"MCUCOUNTDOWN_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["MCUCOUNTDOWN_TEST_BATMAN_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["MCUCOUNTDOWN_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["MCUCOUNTDOWN_APIKEY"],
			},
			extra,
		})
		client = sdk.NewMcuCountdownSDK(core.ToMapAny(mergedOpts))
	}

	live := env["MCUCOUNTDOWN_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["MCUCOUNTDOWN_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
