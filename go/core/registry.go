package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewApiEntityFunc func(client *McuCountdownSDK, entopts map[string]any) McuCountdownEntity

var NewBatmanEntityFunc func(client *McuCountdownSDK, entopts map[string]any) McuCountdownEntity

var NewDcnEntityFunc func(client *McuCountdownSDK, entopts map[string]any) McuCountdownEntity

var NewStarWarEntityFunc func(client *McuCountdownSDK, entopts map[string]any) McuCountdownEntity

