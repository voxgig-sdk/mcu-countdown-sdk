
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { McuCountdownSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('StarWarEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MCUCOUNTDOWN_TEST_LIVE=TRUE.
  afterEach(liveDelay('MCUCOUNTDOWN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = McuCountdownSDK.test()
    const ent = testsdk.StarWar()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MCU_COUNTDOWN_TEST_LIVE
    for (const op of ['load']) {
      if (maybeSkipControl(t, 'entityOp', 'star_war.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set MCU_COUNTDOWN_TEST_STAR_WAR_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let star_war_ref01_data = Object.values(setup.data.existing.star_war)[0] as any

    // LOAD
    const star_war_ref01_ent = client.StarWar()
    const star_war_ref01_match_dt0: any = {}
    star_war_ref01_match_dt0.id = star_war_ref01_data.id
    const star_war_ref01_data_dt0 = await star_war_ref01_ent.load(star_war_ref01_match_dt0)
    assert(star_war_ref01_data_dt0.id === star_war_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/star_war/StarWarTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = McuCountdownSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['star_war01','star_war02','star_war03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['MCU_COUNTDOWN_TEST_STAR_WAR_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'MCU_COUNTDOWN_TEST_STAR_WAR_ENTID': idmap,
    'MCU_COUNTDOWN_TEST_LIVE': 'FALSE',
    'MCU_COUNTDOWN_TEST_EXPLAIN': 'FALSE',
    'MCU_COUNTDOWN_APIKEY': 'NONE',
  })

  idmap = env['MCU_COUNTDOWN_TEST_STAR_WAR_ENTID']

  const live = 'TRUE' === env.MCU_COUNTDOWN_TEST_LIVE

  if (live) {
    client = new McuCountdownSDK(merge([
      {
        apikey: env.MCU_COUNTDOWN_APIKEY,
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.MCU_COUNTDOWN_TEST_EXPLAIN,
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
