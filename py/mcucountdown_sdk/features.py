# McuCountdown SDK feature factory

from mcucountdown_sdk.feature.base_feature import McuCountdownBaseFeature
from mcucountdown_sdk.feature.ratelimit_feature import McuCountdownRatelimitFeature
from mcucountdown_sdk.feature.retry_feature import McuCountdownRetryFeature
from mcucountdown_sdk.feature.test_feature import McuCountdownTestFeature
from mcucountdown_sdk.feature.timeout_feature import McuCountdownTimeoutFeature


_FEATURES = {
    "base": lambda: McuCountdownBaseFeature(),
    "ratelimit": lambda: McuCountdownRatelimitFeature(),
    "retry": lambda: McuCountdownRetryFeature(),
    "test": lambda: McuCountdownTestFeature(),
    "timeout": lambda: McuCountdownTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
