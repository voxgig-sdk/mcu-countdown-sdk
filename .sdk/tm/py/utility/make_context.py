# McuCountdown SDK utility: make_context

from core.context import McuCountdownContext


def make_context_util(ctxmap, basectx):
    return McuCountdownContext(ctxmap, basectx)
