# McuCountdown SDK exists test

require "minitest/autorun"
require_relative "../McuCountdown_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = McuCountdownSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
