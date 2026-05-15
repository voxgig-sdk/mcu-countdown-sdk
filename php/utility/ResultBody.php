<?php
declare(strict_types=1);

// McuCountdown SDK utility: result_body

class McuCountdownResultBody
{
    public static function call(McuCountdownContext $ctx): ?McuCountdownResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
