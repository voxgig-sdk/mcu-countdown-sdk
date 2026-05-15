<?php
declare(strict_types=1);

// McuCountdown SDK utility: result_headers

class McuCountdownResultHeaders
{
    public static function call(McuCountdownContext $ctx): ?McuCountdownResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
