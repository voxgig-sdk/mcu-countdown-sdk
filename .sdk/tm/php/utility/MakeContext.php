<?php
declare(strict_types=1);

// McuCountdown SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class McuCountdownMakeContext
{
    public static function call(array $ctxmap, ?McuCountdownContext $basectx): McuCountdownContext
    {
        return new McuCountdownContext($ctxmap, $basectx);
    }
}
