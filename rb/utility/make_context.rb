# McuCountdown SDK utility: make_context
require_relative '../core/context'
module McuCountdownUtilities
  MakeContext = ->(ctxmap, basectx) {
    McuCountdownContext.new(ctxmap, basectx)
  }
end
