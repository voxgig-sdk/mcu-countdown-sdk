<?php
declare(strict_types=1);

// Batman entity test

require_once __DIR__ . '/../mcucountdown_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class BatmanEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = McuCountdownSDK::test(null, null);
        $ent = $testsdk->Batman(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = batman_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "batman." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set MCUCOUNTDOWN_TEST_BATMAN_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $batman_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.batman")));
        $batman_ref01_data = null;
        if (count($batman_ref01_data_raw) > 0) {
            $batman_ref01_data = Helpers::to_map($batman_ref01_data_raw[0][1]);
        }

        // LOAD
        $batman_ref01_ent = $client->Batman(null);
        $batman_ref01_match_dt0 = [
            "id" => $batman_ref01_data["id"],
        ];
        [$batman_ref01_data_dt0_loaded, $err] = $batman_ref01_ent->load($batman_ref01_match_dt0, null);
        $this->assertNull($err);
        $batman_ref01_data_dt0_load_result = Helpers::to_map($batman_ref01_data_dt0_loaded);
        $this->assertNotNull($batman_ref01_data_dt0_load_result);
        $this->assertEquals($batman_ref01_data_dt0_load_result["id"], $batman_ref01_data["id"]);

    }
}

function batman_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/batman/BatmanTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = McuCountdownSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["batman01", "batman02", "batman03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("MCUCOUNTDOWN_TEST_BATMAN_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "MCUCOUNTDOWN_TEST_BATMAN_ENTID" => $idmap,
        "MCUCOUNTDOWN_TEST_LIVE" => "FALSE",
        "MCUCOUNTDOWN_TEST_EXPLAIN" => "FALSE",
        "MCUCOUNTDOWN_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["MCUCOUNTDOWN_TEST_BATMAN_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["MCUCOUNTDOWN_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["MCUCOUNTDOWN_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new McuCountdownSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["MCUCOUNTDOWN_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["MCUCOUNTDOWN_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
