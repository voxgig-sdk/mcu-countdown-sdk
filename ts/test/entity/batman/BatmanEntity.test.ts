

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { McuCountdownSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('BatmanEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MCU_COUNTDOWN_TEST_LIVE=TRUE.
  afterEach(liveDelay('MCU_COUNTDOWN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = McuCountdownSDK.test()
    const ent = testsdk.Batman()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MCU_COUNTDOWN_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'batman.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"days_until","req":true,"short":"Number of days until release","type":"`$INTEGER`","index$":0},{"active":true,"name":"id","req":true,"short":"TMDB ID of the following production","type":"`$INTEGER`","index$":1},{"active":true,"name":"overview","req":false,"short":"Brief overview/synopsis of the production","type":"`$STRING`","index$":2},{"active":true,"format":"uri","name":"poster_url","req":false,"short":"URL to the poster image from TMDB","type":"`$STRING`","index$":3},{"active":true,"format":"date","name":"release_date","req":true,"short":"Release date in YYYY-MM-DD format","type":"`$STRING`","index$":4},{"active":true,"name":"title","req":true,"short":"Title of the following production","type":"`$STRING`","index$":5},{"active":true,"name":"type","req":true,"short":"Type of production","type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"batman","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /batman","json":"{\"operationId\":\"getNextBatman\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"days_until\":{\"description\":\"Number of days until release (negative if already released)\",\"example\":289,\"type\":\"integer\"},\"following_production\":{\"description\":\"Information about the production following the next one\",\"properties\":{\"days_until\":{\"description\":\"Number of days until release\",\"example\":379,\"type\":\"integer\"},\"id\":{\"description\":\"TMDB ID of the following production\",\"example\":912649,\"type\":\"integer\"},\"overview\":{\"description\":\"Brief overview/synopsis of the production\",\"example\":\"Eddie and Venom are on the run...\",\"type\":\"string\"},\"poster_url\":{\"description\":\"URL to the poster image from TMDB\",\"example\":\"https://image.tmdb.org/t/p/w500/...\",\"format\":\"uri\",\"type\":\"string\"},\"release_date\":{\"description\":\"Release date in YYYY-MM-DD format\",\"example\":\"2024-10-22\",\"format\":\"date\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the following production\",\"example\":\"Venom: The Last Dance\",\"type\":\"string\"},\"type\":{\"description\":\"Type of production\",\"example\":\"Movie\",\"type\":\"string\"}},\"required\":[\"id\",\"title\",\"type\",\"release_date\",\"days_until\"],\"type\":\"object\"},\"id\":{\"description\":\"TMDB ID of the production\",\"example\":533535,\"type\":\"integer\"},\"overview\":{\"description\":\"Brief overview/synopsis of the production\",\"example\":\"A listless Wade Wilson toils away in civilian life...\",\"type\":\"string\"},\"poster_url\":{\"description\":\"URL to the poster image from TMDB\",\"example\":\"https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg\",\"format\":\"uri\",\"type\":\"string\"},\"release_date\":{\"description\":\"Release date in YYYY-MM-DD format\",\"example\":\"2024-07-24\",\"format\":\"date\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the production\",\"example\":\"Deadpool & Wolverine\",\"type\":\"string\"},\"type\":{\"description\":\"Type of production\",\"example\":\"Movie\",\"type\":\"string\"}},\"required\":[\"id\",\"title\",\"type\",\"release_date\",\"days_until\"],\"type\":\"object\"}}},\"description\":\"Successful response with next Batman production details\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"},\"message\":{\"description\":\"Additional details about the error\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"No productions found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"},\"message\":{\"description\":\"Additional details about the error\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/batman","segments":[{"lit":"batman"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.following_production`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"batman","name__orig":"batman","Name":"Batman","name_":"batman","name-":"batman","NAME":"BATMAN","index$":1}, {"active":true,"entity":"batman","key$":"BasicBatmanFlow","kind":"basic","name":"BasicBatmanFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"batman_ref01","srcdatavar":"batman_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-batman_ref01"}}],"index$":0}]}, 'Batman')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let batman_ref01_data = Object.values(setup.data.existing.batman)[0] as any

    // LOAD
    const batman_ref01_ent = client.Batman()
    const batman_ref01_match_dt0: any = {}
    batman_ref01_match_dt0.id = batman_ref01_data.id
    const batman_ref01_data_dt0 = (await batman_ref01_ent.load(batman_ref01_match_dt0)).data()
    assert(batman_ref01_data_dt0.id === batman_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/batman/BatmanTestData.json')

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
    ['batman01','batman02','batman03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MCU_COUNTDOWN_TEST_BATMAN_ENTID': idmap,
    'MCU_COUNTDOWN_TEST_LIVE': 'FALSE',
    'MCU_COUNTDOWN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MCU_COUNTDOWN_TEST_BATMAN_ENTID']

  const live = 'TRUE' === env.MCU_COUNTDOWN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MCU_COUNTDOWN_TEST_BATMAN_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new McuCountdownSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
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
    transport,
    now: Date.now(),
  }

  return setup
}
  
