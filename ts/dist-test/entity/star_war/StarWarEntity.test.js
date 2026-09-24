"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('StarWarEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MCU_COUNTDOWN_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MCU_COUNTDOWN_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.McuCountdownSDK.test();
        const ent = testsdk.StarWar();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MCU_COUNTDOWN_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'star_war.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "days_until": { "a": true, "h": "Days Until", "n": "days_until", "r": true, "sh": "Number of days until release", "t": "`$INTEGER`", "key$": "days_until", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "TMDB ID of the following production", "t": "`$INTEGER`", "key$": "id", "index$": 1 }, "overview": { "a": true, "h": "Overview", "n": "overview", "r": false, "sh": "Brief overview/synopsis of the production", "t": "`$STRING`", "key$": "overview", "index$": 2 }, "poster_url": { "a": true, "fo": "uri", "h": "Poster Url", "n": "poster_url", "r": false, "sh": "URL to the poster image from TMDB", "t": "`$STRING`", "key$": "poster_url", "index$": 3 }, "release_date": { "a": true, "fo": "date", "h": "Release Date", "n": "release_date", "r": true, "sh": "Release date in YYYY-MM-DD format", "t": "`$STRING`", "key$": "release_date", "index$": 4 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "sh": "Title of the following production", "t": "`$STRING`", "key$": "title", "index$": 5 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "Type of production", "t": "`$STRING`", "key$": "type", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "star_war", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /star-wars", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/star-wars", "q": {}, "r": {}, "s": [{ "lit": "star-wars" }], "t": { "req": "`reqdata`", "res": "`body.following_production`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "star_war", "name__orig": "star_war", "Name": "StarWar", "name_": "star_war", "name-": "star-war", "NAME": "STAR_WAR", "index$": 3 }, { "active": true, "entity": "star_war", "key$": "BasicStarWarFlow", "kind": "basic", "name": "BasicStarWarFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "star_war_ref01", "srcdatavar": "star_war_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-star_war_ref01" } }], "index$": 0 }] }, 'StarWar', { "GET /star-wars": { "protocol": "http", "operationId": "getNextStarWars", "responses": { "200": { "description": "Successful response with next Star Wars production details", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "description": "TMDB ID of the production", "example": 533535, "key$": "id", "type": "integer" }, "title": { "description": "Title of the production", "example": "Deadpool & Wolverine", "key$": "title", "type": "string" }, "type": { "description": "Type of production", "example": "Movie", "key$": "type", "type": "string" }, "release_date": { "description": "Release date in YYYY-MM-DD format", "example": "2024-07-24", "format": "date", "key$": "release_date", "type": "string" }, "days_until": { "description": "Number of days until release (negative if already released)", "example": 289, "key$": "days_until", "type": "integer" }, "overview": { "description": "Brief overview/synopsis of the production", "example": "A listless Wade Wilson toils away in civilian life...", "key$": "overview", "type": "string" }, "poster_url": { "description": "URL to the poster image from TMDB", "example": "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", "format": "uri", "key$": "poster_url", "type": "string" }, "following_production": { "description": "Information about the production following the next one", "key$": "following_production", "properties": { "days_until": { "description": "Number of days until release", "example": 379, "type": "integer", "key$": "days_until" }, "id": { "description": "TMDB ID of the following production", "example": 912649, "type": "integer", "key$": "id" }, "overview": { "description": "Brief overview/synopsis of the production", "example": "Eddie and Venom are on the run...", "type": "string", "key$": "overview" }, "poster_url": { "description": "URL to the poster image from TMDB", "example": "https://image.tmdb.org/t/p/w500/...", "format": "uri", "type": "string", "key$": "poster_url" }, "release_date": { "description": "Release date in YYYY-MM-DD format", "example": "2024-10-22", "format": "date", "type": "string", "key$": "release_date" }, "title": { "description": "Title of the following production", "example": "Venom: The Last Dance", "type": "string", "key$": "title" }, "type": { "description": "Type of production", "example": "Movie", "type": "string", "key$": "type" } }, "required": ["id", "title", "type", "release_date", "days_until"], "type": "object", "x-ref": "#/components/schemas/FollowingProduction", "index$": 0 } }, "required": ["id", "title", "type", "release_date", "days_until"], "x-ref": "#/components/schemas/ProductionResponse" } } } }, "404": { "description": "No productions found", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message describing what went wrong" }, "message": { "type": "string", "description": "Additional details about the error" } }, "required": ["error"], "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message describing what went wrong" }, "message": { "type": "string", "description": "Additional details about the error" } }, "required": ["error"], "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let star_war_ref01_data = Object.values(setup.data.existing.star_war)[0];
        // LOAD
        const star_war_ref01_ent = client.StarWar();
        const star_war_ref01_match_dt0 = {};
        star_war_ref01_match_dt0.id = star_war_ref01_data.id;
        const star_war_ref01_data_dt0 = (await star_war_ref01_ent.load(star_war_ref01_match_dt0)).data();
        (0, node_assert_1.default)(star_war_ref01_data_dt0.id === star_war_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/star_war/StarWarTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.McuCountdownSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['star_war01', 'star_war02', 'star_war03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MCU_COUNTDOWN_TEST_STAR_WAR_ENTID': idmap,
        'MCU_COUNTDOWN_TEST_LIVE': 'FALSE',
        'MCU_COUNTDOWN_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['MCU_COUNTDOWN_TEST_STAR_WAR_ENTID'];
    const live = 'TRUE' === env.MCU_COUNTDOWN_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MCU_COUNTDOWN_TEST_STAR_WAR_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.McuCountdownSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=StarWarEntity.test.js.map