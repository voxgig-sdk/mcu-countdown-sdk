package = "voxgig-sdk-mcu-countdown"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/mcu-countdown-sdk.git"
}
description = {
  summary = "McuCountdown SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["mcu-countdown_sdk"] = "mcu-countdown_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
