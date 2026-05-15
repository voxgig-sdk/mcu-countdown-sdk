-- McuCountdown SDK error

local McuCountdownError = {}
McuCountdownError.__index = McuCountdownError


function McuCountdownError.new(code, msg, ctx)
  local self = setmetatable({}, McuCountdownError)
  self.is_sdk_error = true
  self.sdk = "McuCountdown"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function McuCountdownError:error()
  return self.msg
end


function McuCountdownError:__tostring()
  return self.msg
end


return McuCountdownError
