<?php
declare(strict_types=1);

// McuCountdown SDK base feature

class McuCountdownBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(McuCountdownContext $ctx, array $options): void {}
    public function PostConstruct(McuCountdownContext $ctx): void {}
    public function PostConstructEntity(McuCountdownContext $ctx): void {}
    public function SetData(McuCountdownContext $ctx): void {}
    public function GetData(McuCountdownContext $ctx): void {}
    public function GetMatch(McuCountdownContext $ctx): void {}
    public function SetMatch(McuCountdownContext $ctx): void {}
    public function PrePoint(McuCountdownContext $ctx): void {}
    public function PreSpec(McuCountdownContext $ctx): void {}
    public function PreRequest(McuCountdownContext $ctx): void {}
    public function PreResponse(McuCountdownContext $ctx): void {}
    public function PreResult(McuCountdownContext $ctx): void {}
    public function PreDone(McuCountdownContext $ctx): void {}
    public function PreUnexpected(McuCountdownContext $ctx): void {}
}
