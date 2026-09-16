# McuCountdown SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module McuCountdownFeatures
  def self.make_feature(name)
    case name
    when "base"
      McuCountdownBaseFeature.new
    when "ratelimit"
      McuCountdownRatelimitFeature.new
    when "retry"
      McuCountdownRetryFeature.new
    when "test"
      McuCountdownTestFeature.new
    when "timeout"
      McuCountdownTimeoutFeature.new
    else
      McuCountdownBaseFeature.new
    end
  end
end
