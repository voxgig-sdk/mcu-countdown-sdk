# McuCountdown SDK utility: feature_add
module McuCountdownUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
