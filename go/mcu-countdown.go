package voxgigmcucountdownsdk

import (
	"github.com/voxgig-sdk/mcu-countdown-sdk/core"
	"github.com/voxgig-sdk/mcu-countdown-sdk/entity"
	"github.com/voxgig-sdk/mcu-countdown-sdk/feature"
	_ "github.com/voxgig-sdk/mcu-countdown-sdk/utility"
)

// Type aliases preserve external API.
type McuCountdownSDK = core.McuCountdownSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type McuCountdownEntity = core.McuCountdownEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type McuCountdownError = core.McuCountdownError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewApiEntityFunc = func(client *core.McuCountdownSDK, entopts map[string]any) core.McuCountdownEntity {
		return entity.NewApiEntity(client, entopts)
	}
	core.NewBatmanEntityFunc = func(client *core.McuCountdownSDK, entopts map[string]any) core.McuCountdownEntity {
		return entity.NewBatmanEntity(client, entopts)
	}
	core.NewDcnEntityFunc = func(client *core.McuCountdownSDK, entopts map[string]any) core.McuCountdownEntity {
		return entity.NewDcnEntity(client, entopts)
	}
	core.NewStarWarEntityFunc = func(client *core.McuCountdownSDK, entopts map[string]any) core.McuCountdownEntity {
		return entity.NewStarWarEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewMcuCountdownSDK = core.NewMcuCountdownSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
