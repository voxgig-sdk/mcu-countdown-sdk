# McuCountdown SDK utility: make_context

from mcucountdown_sdk.core.context import McuCountdownContext


def make_context_util(ctxmap, basectx):
    return McuCountdownContext(ctxmap, basectx)
