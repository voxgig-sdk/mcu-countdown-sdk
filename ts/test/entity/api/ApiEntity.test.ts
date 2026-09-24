

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ApiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MCU_COUNTDOWN_TEST_LIVE=TRUE.
  afterEach(liveDelay('MCU_COUNTDOWN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = McuCountdownSDK.test()
    const ent = testsdk.Api()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MCU_COUNTDOWN_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"days_until":{"a":true,"h":"Days Until","n":"days_until","r":true,"sh":"Number of days until release","t":"`$INTEGER`","key$":"days_until","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"TMDB ID of the following production","t":"`$INTEGER`","key$":"id","index$":1},"overview":{"a":true,"h":"Overview","n":"overview","r":false,"sh":"Brief overview/synopsis of the production","t":"`$STRING`","key$":"overview","index$":2},"poster_url":{"a":true,"fo":"uri","h":"Poster Url","n":"poster_url","r":false,"sh":"URL to the poster image from TMDB","t":"`$STRING`","key$":"poster_url","index$":3},"release_date":{"a":true,"fo":"date","h":"Release Date","n":"release_date","r":true,"sh":"Release date in YYYY-MM-DD format","t":"`$STRING`","key$":"release_date","index$":4},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"Title of the following production","t":"`$STRING`","key$":"title","index$":5},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Type of production","t":"`$STRING`","key$":"type","index$":6}},"id":{"field":"id","name":"id"},"name":"api","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"2025-01-01","k":"query","n":"date","or":"date","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"1","k":"query","n":"list_id","or":"list_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api","q":{"exist":["date","list_id"]},"r":{},"s":[{"lit":"api"}],"t":{"req":"`reqdata`","res":"`body.following_production`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"api","name__orig":"api","Name":"Api","name_":"api","name-":"api","NAME":"API","index$":0}, {"active":true,"entity":"api","key$":"BasicApiFlow","kind":"basic","name":"BasicApiFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_ref01","srcdatavar":"api_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_ref01"}}],"index$":0}]}, 'Api', {"GET /api":{"protocol":"http","operationId":"getNextProduction","responses":{"200":{"description":"Successful response with next production details","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"description":"TMDB ID of the production","example":533535,"key$":"id","type":"integer"},"title":{"description":"Title of the production","example":"Deadpool & Wolverine","key$":"title","type":"string"},"type":{"description":"Type of production","example":"Movie","key$":"type","type":"string"},"release_date":{"description":"Release date in YYYY-MM-DD format","example":"2024-07-24","format":"date","key$":"release_date","type":"string"},"days_until":{"description":"Number of days until release (negative if already released)","example":289,"key$":"days_until","type":"integer"},"overview":{"description":"Brief overview/synopsis of the production","example":"A listless Wade Wilson toils away in civilian life...","key$":"overview","type":"string"},"poster_url":{"description":"URL to the poster image from TMDB","example":"https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg","format":"uri","key$":"poster_url","type":"string"},"following_production":{"description":"Information about the production following the next one","key$":"following_production","properties":{"days_until":{"description":"Number of days until release","example":379,"type":"integer","key$":"days_until"},"id":{"description":"TMDB ID of the following production","example":912649,"type":"integer","key$":"id"},"overview":{"description":"Brief overview/synopsis of the production","example":"Eddie and Venom are on the run...","type":"string","key$":"overview"},"poster_url":{"description":"URL to the poster image from TMDB","example":"https://image.tmdb.org/t/p/w500/...","format":"uri","type":"string","key$":"poster_url"},"release_date":{"description":"Release date in YYYY-MM-DD format","example":"2024-10-22","format":"date","type":"string","key$":"release_date"},"title":{"description":"Title of the following production","example":"Venom: The Last Dance","type":"string","key$":"title"},"type":{"description":"Type of production","example":"Movie","type":"string","key$":"type"}},"required":["id","title","type","release_date","days_until"],"type":"object","x-ref":"#/components/schemas/FollowingProduction","index$":0}},"required":["id","title","type","release_date","days_until"],"x-ref":"#/components/schemas/ProductionResponse"},"example":{"id":533535,"title":"Deadpool & Wolverine","type":"Movie","release_date":"2024-07-24","days_until":289,"overview":"A listless Wade Wilson toils away in civilian life...","poster_url":"https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg","following_production":{"id":912649,"title":"Venom: The Last Dance","type":"Movie","release_date":"2024-10-22","days_until":379,"overview":"Eddie and Venom are on the run...","poster_url":"https://image.tmdb.org/t/p/w500/..."}}}}},"400":{"description":"Bad request - Invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message describing what went wrong"},"message":{"type":"string","description":"Additional details about the error"}},"required":["error"],"x-ref":"#/components/schemas/Error"}}}},"404":{"description":"No productions found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message describing what went wrong"},"message":{"type":"string","description":"Additional details about the error"}},"required":["error"],"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message describing what went wrong"},"message":{"type":"string","description":"Additional details about the error"}},"required":["error"],"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"list_id","in":"query","description":"TMDB list ID to query. If not provided, defaults to the MCU list. You can view any TMDB list at: https://www.themoviedb.org/list/YOUR_LIST_ID","required":false,"schema":{"type":"string"},"example":"1","index$":0},{"name":"date","in":"query","description":"Get the next production after a specific date in YYYY-MM-DD format","required":false,"schema":{"type":"string","format":"date"},"example":"2025-01-01","index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_ref01_data = Object.values(setup.data.existing.api)[0] as any

    // LOAD
    const api_ref01_ent = client.Api()
    const api_ref01_match_dt0: any = {}
    api_ref01_match_dt0.id = api_ref01_data.id
    const api_ref01_data_dt0 = (await api_ref01_ent.load(api_ref01_match_dt0)).data()
    assert(api_ref01_data_dt0.id === api_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api/ApiTestData.json')

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
    ['api01','api02','api03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MCU_COUNTDOWN_TEST_API_ENTID': idmap,
    'MCU_COUNTDOWN_TEST_LIVE': 'FALSE',
    'MCU_COUNTDOWN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MCU_COUNTDOWN_TEST_API_ENTID']

  const live = 'TRUE' === env.MCU_COUNTDOWN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MCU_COUNTDOWN_TEST_API_ENTID']
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
  
