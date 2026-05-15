<?php
declare(strict_types=1);

// McuCountdown SDK utility: feature_add

class McuCountdownFeatureAdd
{
    public static function call(McuCountdownContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
