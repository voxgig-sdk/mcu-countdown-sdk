# ProjectName SDK exists test

import pytest
from mcucountdown_sdk import McuCountdownSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = McuCountdownSDK.test(None, None)
        assert testsdk is not None
