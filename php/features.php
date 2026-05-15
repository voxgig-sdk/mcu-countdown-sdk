<?php
declare(strict_types=1);

// McuCountdown SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class McuCountdownFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new McuCountdownBaseFeature();
            case "test":
                return new McuCountdownTestFeature();
            default:
                return new McuCountdownBaseFeature();
        }
    }
}
