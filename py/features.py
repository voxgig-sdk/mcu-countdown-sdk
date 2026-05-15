# McuCountdown SDK feature factory

from feature.base_feature import McuCountdownBaseFeature
from feature.test_feature import McuCountdownTestFeature


def _make_feature(name):
    features = {
        "base": lambda: McuCountdownBaseFeature(),
        "test": lambda: McuCountdownTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
