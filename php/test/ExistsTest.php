<?php
declare(strict_types=1);

// McuCountdown SDK exists test

require_once __DIR__ . '/../mcucountdown_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = McuCountdownSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
