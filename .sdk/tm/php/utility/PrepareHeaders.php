<?php
declare(strict_types=1);

// McuCountdown SDK utility: prepare_headers

class McuCountdownPrepareHeaders
{
    public static function call(McuCountdownContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
