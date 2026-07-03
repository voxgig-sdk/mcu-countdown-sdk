# StarWar entity test

require "minitest/autorun"
require "json"
require_relative "../McuCountdown_sdk"
require_relative "runner"

class StarWarEntityTest < Minitest::Test
  def test_create_instance
    testsdk = McuCountdownSDK.test(nil, nil)
    ent = testsdk.StarWar(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = star_war_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "star_war." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MCUCOUNTDOWN_TEST_STAR_WAR_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    star_war_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.star_war")))
    star_war_ref01_data = nil
    if star_war_ref01_data_raw.length > 0
      star_war_ref01_data = Helpers.to_map(star_war_ref01_data_raw[0][1])
    end

    # LOAD
    star_war_ref01_ent = client.StarWar(nil)
    star_war_ref01_match_dt0 = {
      "id" => star_war_ref01_data["id"],
    }
    star_war_ref01_data_dt0_loaded, err = star_war_ref01_ent.load(star_war_ref01_match_dt0, nil)
    assert_nil err
    star_war_ref01_data_dt0_load_result = Helpers.to_map(star_war_ref01_data_dt0_loaded)
    assert !star_war_ref01_data_dt0_load_result.nil?
    assert_equal star_war_ref01_data_dt0_load_result["id"], star_war_ref01_data["id"]

  end
end

def star_war_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "star_war", "StarWarTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = McuCountdownSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["star_war01", "star_war02", "star_war03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["MCUCOUNTDOWN_TEST_STAR_WAR_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MCUCOUNTDOWN_TEST_STAR_WAR_ENTID" => idmap,
    "MCUCOUNTDOWN_TEST_LIVE" => "FALSE",
    "MCUCOUNTDOWN_TEST_EXPLAIN" => "FALSE",
    "MCUCOUNTDOWN_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["MCUCOUNTDOWN_TEST_STAR_WAR_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["MCUCOUNTDOWN_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["MCUCOUNTDOWN_APIKEY"],
      },
      extra || {},
    ])
    client = McuCountdownSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["MCUCOUNTDOWN_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["MCUCOUNTDOWN_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
