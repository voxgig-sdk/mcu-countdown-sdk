<?php
declare(strict_types=1);

// Typed models for the McuCountdown SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Api entity data model. */
class Api
{
    public int $days_until;
    public array $following_production;
    public int $id;
    public ?string $overview = null;
    public ?string $poster_url = null;
    public string $release_date;
    public string $title;
    public string $type;
}

/** Request payload for Api#load. */
class ApiLoadMatch
{
    public ?int $days_until = null;
    public ?array $following_production = null;
    public int $id;
    public ?string $overview = null;
    public ?string $poster_url = null;
    public ?string $release_date = null;
    public ?string $title = null;
    public ?string $type = null;
}

/** Batman entity data model. */
class Batman
{
    public int $days_until;
    public array $following_production;
    public int $id;
    public ?string $overview = null;
    public ?string $poster_url = null;
    public string $release_date;
    public string $title;
    public string $type;
}

/** Request payload for Batman#load. */
class BatmanLoadMatch
{
    public ?int $days_until = null;
    public ?array $following_production = null;
    public int $id;
    public ?string $overview = null;
    public ?string $poster_url = null;
    public ?string $release_date = null;
    public ?string $title = null;
    public ?string $type = null;
}

/** Dcn entity data model. */
class Dcn
{
    public int $days_until;
    public array $following_production;
    public int $id;
    public ?string $overview = null;
    public ?string $poster_url = null;
    public string $release_date;
    public string $title;
    public string $type;
}

/** Request payload for Dcn#load. */
class DcnLoadMatch
{
    public ?int $days_until = null;
    public ?array $following_production = null;
    public int $id;
    public ?string $overview = null;
    public ?string $poster_url = null;
    public ?string $release_date = null;
    public ?string $title = null;
    public ?string $type = null;
}

/** StarWar entity data model. */
class StarWar
{
    public int $days_until;
    public array $following_production;
    public int $id;
    public ?string $overview = null;
    public ?string $poster_url = null;
    public string $release_date;
    public string $title;
    public string $type;
}

/** Request payload for StarWar#load. */
class StarWarLoadMatch
{
    public ?int $days_until = null;
    public ?array $following_production = null;
    public int $id;
    public ?string $overview = null;
    public ?string $poster_url = null;
    public ?string $release_date = null;
    public ?string $title = null;
    public ?string $type = null;
}

