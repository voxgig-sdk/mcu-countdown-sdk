# McuCountdown SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module McuCountdownFeatures
  def self.make_feature(name)
    case name
    when "base"
      McuCountdownBaseFeature.new
    when "test"
      McuCountdownTestFeature.new
    else
      McuCountdownBaseFeature.new
    end
  end
end
